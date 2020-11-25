/**
 * Returns the sentences from a certain block.
 *
 * @param {string} block The HTML inside a HTML block.
 * @returns {Array<string>} The list of sentences in the block.
 */
function getSentencesFromBlock(block) {
    const sentenceTokenizer = new SentenceTokenizer.default();

    let _sentenceTokenizer$cr = sentenceTokenizer.createTokenizer();

    const tokenizer = _sentenceTokenizer$cr.tokenizer,
        tokens = _sentenceTokenizer$cr.tokens;

    sentenceTokenizer.tokenize(tokenizer, block);

    return tokens.length === 0 ? [] : sentenceTokenizer.getSentencesFromTokens(tokens);
}

function getSentences(text){
    text = unifyNonBreakingSpace(text);
    let blocks = getBlocks(text);
    const newLines = "\n\r|\n|\r";
    const newLineRegex = new RegExp(newLines);

    // Split each block on newlines.
    blocks = _.flatMap(blocks, function (block) {
        return block.split(newLineRegex);
    });
    const getSentencesFromBlockCached = _.memoize(getSentencesFromBlock);
    const sentences = _.flatMap(blocks, getSentencesFromBlockCached);

    return _.filter(sentences, _.negate(_.isEmpty));
}

function countSentencesFromText(){
    let sentences = getSentences($("#product-description").text());
    return sentencesLength(sentences);
}

function formatNumber(number) {
    if (Math.round(number) === number) {
        return Math.round(number);
    }

    return Math.round(number * 10) / 10;
}

/**
 *
 *  tokenizer core
 *
 * */
function findMatchingRule(rules, text){
    let i;
    for(i=0; i<rules.length; i++)
        if(rules[i].regex.test(text))
            return rules[i];
    return undefined;
}

function findMaxIndexAndRule(rules, text){
    let i, rule, last_matching_rule;
    for(i=0; i<text.length; i++){
        rule = findMatchingRule(rules, text.substring(0, i + 1));
        if(rule)
            last_matching_rule = rule;
        else if(last_matching_rule)
            return {max_index: i, rule: last_matching_rule};
    }
    return last_matching_rule ? {max_index: text.length, rule: last_matching_rule} : undefined;
}

function tokenizerCore(onToken_orig){
    let buffer = "";
    let rules = [];
    let line = 1;
    let col = 1;

    function onToken(src, type){
        onToken_orig({
            type: type,
            src: src,
            line: line,
            col: col
        });
        let lines = src.split("\n");
        line += lines.length - 1;
        col = (lines.length > 1 ? 1 : col) + lines[lines.length - 1].length;
    }

    return {
        addRule: function(regex, type){
            rules.push({regex: regex, type: type});
        },
        onText: function(text){
            let str = buffer + text;
            let m = findMaxIndexAndRule(rules, str);
            while(m && m.max_index !== str.length){
                onToken(str.substring(0, m.max_index), m.rule.type);

                //now find the next token
                str = str.substring(m.max_index);
                m = findMaxIndexAndRule(rules, str);
            }
            buffer = str;
        },
        end: function(){
            if(buffer.length === 0)
                return;

            let rule = findMatchingRule(rules, buffer);
            if(!rule){
                let err = new Error("unable to tokenize");
                err.tokenizer2 = {
                    buffer: buffer,
                    line: line,
                    col: col
                };
                throw err;
            }

            onToken(buffer, rule.type);
        }
    };
}
/**
 * Creates a tokenizer to tokenize HTML into blocks.
 *
 * @returns {void}
 */
function createTokenizer() {
    tokens = [];

    htmlBlockTokenizer = tokenizerCore(function (token) {
        tokens.push(token);
    });

    htmlBlockTokenizer.addRule(contentRegex, "content");
    htmlBlockTokenizer.addRule(greaterThanContentRegex, "greater-than-sign-content");

    htmlBlockTokenizer.addRule(blockElementStartRegex, "block-start");
    htmlBlockTokenizer.addRule(blockElementEndRegex, "block-end");
    htmlBlockTokenizer.addRule(inlineElementStartRegex, "inline-start");
    htmlBlockTokenizer.addRule(inlineElementEndRegex, "inline-end");

    htmlBlockTokenizer.addRule(otherElementStartRegex, "other-element-start");
    htmlBlockTokenizer.addRule(otherElementEndRegex, "other-element-end");
}

/**
 * Splits a text into blocks based on HTML block elements.
 *
 * @param {string} text The text to split.
 * @returns {Array} A list of blocks based on HTML block elements.
 */
function getBlocks(text) {
    let commentRegex = /<!--(.|[\r\n])*?-->/g;
    let blocks = [],
        depth = 0,
        blockStartTag = "",
        currentBlock = "",
        blockEndTag = "";

    // Remove all comments because it is very hard to tokenize them.
    text = text.replace(commentRegex, "");

    createTokenizer();
    htmlBlockTokenizer.onText(text);
    htmlBlockTokenizer.end();

    _.forEach(tokens, function (token, i) {
        let nextToken = tokens[i + 1];

        switch (token.type) {
            case "content":
            case "greater-than-sign-content":
            case "inline-start":
            case "inline-end":
            case "other-tag":
            case "other-element-start":
            case "other-element-end":
            case "greater than sign":
                if (!nextToken || depth === 0 && (nextToken.type === "block-start" || nextToken.type === "block-end")) {
                    currentBlock += token.src;

                    blocks.push(currentBlock);
                    blockStartTag = "";
                    currentBlock = "";
                    blockEndTag = "";
                } else {
                    currentBlock += token.src;
                }
                break;

            case "block-start":
                if (depth !== 0) {
                    if (currentBlock.trim() !== "") {
                        blocks.push(currentBlock);
                    }
                    currentBlock = "";
                    blockEndTag = "";
                }

                depth++;
                blockStartTag = token.src;
                break;

            case "block-end":
                depth--;
                blockEndTag = token.src;

                /*
                 * We try to match the most deep blocks so discard any other blocks that have been started but not
                 * finished.
                 */
                if ("" !== blockStartTag && "" !== blockEndTag) {
                    blocks.push(blockStartTag + currentBlock + blockEndTag);
                } else if ("" !== currentBlock.trim()) {
                    blocks.push(currentBlock);
                }
                blockStartTag = "";
                currentBlock = "";
                blockEndTag = "";
                break;
        }

        // Handles HTML with too many closing tags.
        if (depth < 0) {
            depth = 0;
        }
    });

    return blocks;
}

/**
 * Calculates the percentage of sentences that are too long.
 *
 * @param {Array} sentences The sentences to calculate the percentage for.
 * @returns {number} The calculates percentage of too long sentences.
 */
function calculatePercentage(sentences) {
    let percentage = 0;

    if (sentences.length !== 0) {
        const tooLongTotal = countTooLongSentences(sentences);

        percentage = formatNumber(tooLongTotal / sentences.length * 100);
    }

    return percentage;
}

/**
 * Calculates the score for the given percentage.
 *
 * @param {number} percentage The percentage to calculate the score for.
 * @returns {number} The calculated score.
 */
function calculateSentenceLengthScore(percentage) {
    let score;

    // Green indicator.
    if (percentage <= 25) {
        score = 9;
    }

    // Orange indicator.
    if (inRangeEndInclusive(percentage, 25, 30)) {
        score = 6;
    }

    // Red indicator.
    if (percentage > 30) {
        score = 3;
    }

    return score;
}

function calculateSentenceLengthResult() {
    const sentences = countSentencesFromText();
    const percentage = calculatePercentage(sentences);
    const score = calculateSentenceLengthScore(percentage);

    // const assessmentResult = new _AssessmentResult2.default();
    //
    // assessmentResult.setScore(score);
    // assessmentResult.setText(this.translateScore(score, percentage, i18n));
    // assessmentResult.setHasMarks(percentage > 0);
    // return assessmentResult;
    if (score >= 7) {
        return i18n.sprintf(
            /* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
            i18n.dgettext("js-text-analysis", "%1$sSentence length%2$s: Great!"), urlTitle, "</a>");
    }

    return i18n.sprintf(
        /* Translators: %1$s and %6$s expand to a link on yoast.com, %2$s expands to the anchor end tag,
  %3$d expands to percentage of sentences, %4$s expands to the recommended maximum sentence length,
  %5$s expands to the recommended maximum percentage. */
        i18n.dgettext("js-text-analysis", "%1$sSentence length%2$s: %3$s of the sentences contain more than %4$s words, which is more than the recommended maximum of %5$s." +
            " %6$sTry to shorten the sentences%2$s."), urlTitle, "</a>",
        percentage + "%", this._config.recommendedWordCount, this._config.slightlyTooMany + "%", urlCallToAction);
}
