
let FleschKincaid = exports;
let transitionWords = ['and','therefore','in other words','however','for instance','above all','in addition','after that','similarly','in conclusion'];
let tokens = [];
let htmlBlockTokenizer;
let blockElements = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tfoot", "ul", "video"];
let inlineElements = ["b", "big", "i", "small", "tt", "abbr", "acronym", "cite", "code", "dfn", "em", "kbd", "strong", "samp", "time", "var", "a", "bdo", "br", "img", "map", "object", "q", "script", "span", "sub", "sup", "button", "input", "label", "select", "textarea"];

let blockElementsRegex = new RegExp("^(" + blockElements.join("|") + ")$", "i");
let inlineElementsRegex = new RegExp("^(" + inlineElements.join("|") + ")$", "i");

let blockElementStartRegex = new RegExp("^<(" + blockElements.join("|") + ")[^>]*?>$", "i");
let blockElementEndRegex = new RegExp("^</(" + blockElements.join("|") + ")[^>]*?>$", "i");

let inlineElementStartRegex = new RegExp("^<(" + inlineElements.join("|") + ")[^>]*>$", "i");
let inlineElementEndRegex = new RegExp("^</(" + inlineElements.join("|") + ")[^>]*>$", "i");

let otherElementStartRegex = /^<([^>\s/]+)[^>]*>$/;
let otherElementEndRegex = /^<\/([^>\s]+)[^>]*>$/;

let contentRegex = /^[^<]+$/;
let greaterThanContentRegex = /^<[^><]*$/;

let commentRegex = /<!--(.|[\r\n])*?-->/g;

function FleschReadingScoreCheck(){
    if ($('#readability-bad-collapsible').children('.seo-flesch').length > 0){
        $('#readability-bad-collapsible').children('.seo-flesch').remove();
    } else if ($('#readability-improve-collapsible').children('.seo-flesch').length > 0){
        $('#readability-improve-collapsible').children('.seo-flesch').remove();
    } else if ($('#readability-good-collapsible').children('.seo-flesch').length > 0){
        $('#readability-good-collapsible').children('.seo-flesch').remove();
    }

    let FleschReadingScore = parseInt(FleschKincaid.rate($($("#product-description").summernote("code")).text()));
    FleschReadingScore = Math.abs(FleschReadingScore);
    if (FleschReadingScore < 30){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered very difficult to read. ' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Try to make shorter sentences, using less difficult words to improve readability.</a></span></div>';
        $('#readability-bad-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore < 50){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered difficult to read. ' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Try to make shorter sentences, using less difficult words to improve readability.</a></span></div>';
        $('#readability-improve-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore < 60){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered fairly difficult to read. ' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Try to make shorter sentences to improve readability.</a></span></div>';
        $('#readability-improve-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore < 70){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered ok to read. Good job!' +
            '</span></div>';
        $('#readability-good-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore < 80){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered fairly easy to read. Good job!' +
            '</span></div>';
        $('#readability-good-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore < 90){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered easy to read. Good job!' +
            '</span></div>';
        $('#readability-good-collapsible').append(FleschReadingEase);
    } else if (FleschReadingScore <= 100){
        FleschReadingEase = '<div class="seo-score seo-flesch"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/flesch-reading-ease-score" target="_blank">Flesch Reading Ease</a>: The copy scores '+FleschReadingScore+' in the test, which is considered very easy to read. Good job!' +
            '</span></div>';
        $('#readability-good-collapsible').append(FleschReadingEase);
    }
}
FleschReadingScoreCheck();

/* Transition Analysis */
function multiIncludes(text, values){
    return values.some(function(val){
        return text.includes(val);
    });
}

function transitionPercentage(text) {
    let transitionSentences = 0;
    let sentencesArray = $.trim($($("#product-description").summernote("code")).text()).split(".");

    sentencesArray.forEach(function () {
        if (multiIncludes(text,transitionWords)){
            transitionSentences++;
        }
    });
    return (transitionSentences * sentencesArray.length) / 100;
}
/**
 * Gets all subheadings from the text and returns these in an array.
 *
 * @param {string} text The text to return the headings from.
 *
 * @returns {Array<string[]>} Matches of subheadings in the text, first key is everything including tags,
 *                            second is the heading level, third is the content of the subheading.
 */
function getSubheadings(text) {
    const subheadings = [];
    const regex = /<h([1-6])(?:[^>]+)?>(.*?)<\/h\1>/ig;
    let match;

    while ((match = regex.exec(text)) !== null) {
        subheadings.push(match);
    }

    return subheadings;
}
/**
 * Checks whether the paper has subheadings.
 *
 * @param text The text to use for the assessment.
 *
 * @returns {boolean} True when there is at least one subheading.
 */
function hasSubheadings(text) {
    const subheadings = getSubheadings(text);
     return subheadings.length > 0;
}

function inRangeEndInclusive(number, start, end) {
    return number > start && number <= end;
}

function getSubheadingTexts(text){
    /*
      Matching this in a regex is pretty hard, since we need to find a way for matching the text after a heading, and before the end of the text.
      The hard thing capturing this is with a capture, it captures the next subheading as well, so it skips the next part of the text,
      since the subheading is already matched.
      For now we use this method to be sure we capture the right blocks of text. We remove all | 's from text,
      then replace all headings with a | and split on a |.
  */
    text = text.replace(/\|/ig, "");
    text = text.replace(/<h([1-6])(?:[^>]+)?>(.*?)<\/h\1>/ig, "|");

    const subheadingsTexts = text.split("|");

    if (_.isEmpty(subheadingsTexts[0])) {
        subheadingsTexts.shift();
    }
    // if ((0, _lodashEs.isEmpty)(subheadingsTexts[0])) {
    //     subheadingsTexts.shift();
    // }

    return subheadingsTexts;
}

function removePunctuation(text) {
    let punctuationRegexString = "[\\–\\-\\(\\)_\\[\\]’“”〝〞〟‟„\"'.?!:;,¿¡«»‹›\u2014\u00d7\u002b\u0026\u06d4\u061f\u060C\u061B\\<\>]+";
    let punctuationRegexStart = new RegExp("^" + punctuationRegexString);
    let punctuationRegexEnd = new RegExp(punctuationRegexString + "$");

    text = text.replace(punctuationRegexStart, "");
    text = text.replace(punctuationRegexEnd, "");

    return text;
}

function stripExtras(text){
    // Replace multiple spaces with single space
    text = text.replace(/\s{2,}/g, " ");

    // Replace spaces followed by periods with only the period.
    text = text.replace(/\s\./g, ".");

    // Remove first/last character if space
    text = text.replace(/^\s+|\s+$/g, "");

    text = text.replace(/^(<\/([^>]+)>)+/i, "");
    text = text.replace(/(<([^/>]+)>)+$/i, "");
    text = text.replace(blockElementStartRegex, "");
    text = text.replace(blockElementEndRegex, "");
    text = text.replace(/(<([^>]+)>)/ig, " ");

    // Replace multiple spaces with single space
    text = text.replace(/\s{2,}/g, " ");

    // Replace spaces followed by periods with only the period.
    text = text.replace(/\s\./g, ".");

    // Remove first/last character if space
    text = text.replace(/^\s+|\s+$/g, "");

    return text;
}

function getWords(text){
    text = stripExtras(text);
    if (text === "") {
        return [];
    }

    let words = text.split(/\s/g);

    words = _.map(words, function (word) {
        return removePunctuation(word);
    });

    return _.filter(words, function (word) {
        return word.trim() !== "";
    });
}

function countWords(text){
    return getWords(text).length;
}

function subheadingTextsLength(){
    const text = $("#product-description").summernote("code");
    const matches = getSubheadingTexts(text);

    const subHeadingTexts = [];
    _.forEach(matches, function (subHeading) {
        subHeadingTexts.push({
            text: subHeading,
            wordCount: countWords(subHeading)
        });
    });
    return subHeadingTexts;
}

function isValueTooLong(recommendedValue, valueLength) {
    return valueLength > recommendedValue;
}

function getTooLongSubheadingTexts() {
    return _.filter(subheadingTextsLength, function (subheading) {
        return isValueTooLong(250, subheading.wordCount);
    }.bind(this));
}

function calculateSubheadingDistribution() {

    if ($('#readability-bad-collapsible').children('.seo-subheadings').length > 0){
        $('#readability-bad-collapsible').children('.seo-subheadings').remove();
    } else if ($('#readability-improve-collapsible').children('.seo-subheadings').length > 0){
        $('#readability-improve-collapsible').children('.seo-subheadings').remove();
    } else if ($('#readability-good-collapsible').children('.seo-subheadings').length > 0){
        $('#readability-good-collapsible').children('.seo-subheadings').remove();
    }
    let cleanDescription = $($("#product-description").summernote("code")).text();
    let subheadingsChecker = '';
    if (cleanDescription.length > 300) {

        if (hasSubheadings($("#product-description").summernote("code"))) {
            const subheadingLength = subheadingTextsLength();
            const longestSubheadingTextLength = subheadingLength[0].wordCount;
            let tooLongTextsNumber = '';

            if (longestSubheadingTextLength <= 250) {
                // Green indicator.
                subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
                    '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a>: Great job!</span></div>';
                $('#readability-good-collapsible').append(subheadingsChecker);
                return true;
            }

            if (inRangeEndInclusive(longestSubheadingTextLength, 250, 300)) {
                tooLongTextsNumber = getTooLongSubheadingTexts();
                // Orange indicator.
                subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
                    '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a>: '+tooLongTextsNumber+' section of your text are longer than 250 words and are not separated by any subheadings.<a href="https://yoa.st/35a" target="_blank">Add subheadings to improve readability.</a></span></div>';
                $('#readability-improve-collapsible').append(subheadingsChecker);
                return true;
            }

            tooLongTextsNumber = getTooLongSubheadingTexts();
            subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a>: '+tooLongTextsNumber+' section of your text are longer than 300 words and are not separated by any subheadings.<a href="https://yoa.st/35a" target="_blank">Add subheadings to improve readability.</a></span></div>';
            $('#readability-bad-collapsible').append(subheadingsChecker);
            return true;
        }
        // Red indicator, use '2' so we can differentiate in external analysis.
        subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a>: You are not using any subheadings, although your text is rather long.<a href="https://yoa.st/35a" target="_blank">Try and add some subheadings.</a></span></div>';
        $('#readability-bad-collapsible').append(subheadingsChecker);
        return true;
    }
    if (hasSubheadings($("#product-description").html())) {
        // Green indicator.
        subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a>: Great job!</span></div>';
        $('#readability-good-collapsible').append(subheadingsChecker);
        return true;
    }

    // Green indicator.
    subheadingsChecker = '<div class="seo-score seo-subheadings"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Subheading distribution:</a> You are not using any subheadings, but your text is short enough and probably doesn\'t need them.</span></div>';
    $('#readability-good-collapsible').append(subheadingsChecker);
    return true;
    // return {
    //     score: this._config.scores.goodShortTextNoSubheadings,
    //     resultText: i18n.sprintf(
    //         /* Translators: %1$s expands to a link to https://yoa.st/headings, %2$s expands to the link closing tag. */
    //         i18n.dgettext("js-text-analysis", "%1$sSubheading distribution%2$s: You are not using any subheadings, but your text is short enough" + " and probably doesn't need them."), this._config.urlTitle, "</a>")
    // };
}
calculateSubheadingDistribution();

function checkForTooLongSentences(sentences, recommendedValue){
    return _.filter(sentences, function (sentence) {
        return isValueTooLong(recommendedValue, sentence.sentenceLength);
    });
}

function stripSpaces(text) {
    // Replace multiple spaces with single space
    text = text.replace(/\s{2,}/g, " ");

    // Replace spaces followed by periods with only the period.
    text = text.replace(/\s\./g, ".");

    // Remove first/last character if space
    text = text.replace(/^\s+|\s+$/g, "");

    return text;
}

function stripFullHtmlTags(text) {
    text = text.replace(/(<([^>]+)>)/ig, " ");
    text = stripSpaces(text);
    return text;
}

function sentencesLength(sentences) {
    let sentencesWordCount = [];
     _.forEach(sentences, function (sentence) {
        // For counting words we want to omit the HTMLtags.
        let strippedSentence = stripFullHtmlTags(sentence);
        let length = countWords(strippedSentence);

        if (length <= 0) {
            return;
        }

        sentencesWordCount.push({
            sentence: sentence,
            sentenceLength: countWords.default(sentence)
        });
    });
    return sentencesWordCount;
}

function unifyNonBreakingSpace(text) {
    return text.replace(/&nbsp;/g, " ");
}

function countSentencesFromDescription(){
    let sentences = getSentences($("#product-description").text());
    return sentencesLength(sentences);
}
