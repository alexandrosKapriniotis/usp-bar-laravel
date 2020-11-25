import { Paper, Researcher} from "yoastseo";

const paper = new Paper( jQuery('#product-description').summernote('code'), {
    title: $(".preview-title").text(),
    description: $(".preview-description").text(),
    url: $("#previewSlug").text()
} );
const researcher = new Researcher( paper );
const pageTitleWidth = researcher.getResearch( "pageTitleWidth" );
const getLinks = researcher.getResearch( "getLinks" );
const linkCount = researcher.getResearch( "linkCount" );

function isValueTooLong(recommendedValue, valueLength) {
    return valueLength > recommendedValue;
}

function checkForTooLongSentences(sentences, recommendedValue){
    return _.filter(sentences, function (sentence) {
        return isValueTooLong(recommendedValue, sentence.sentenceLength);
    });
}
/**
 * Gets the sentences that are qualified as being too long.
 *
 * @param {array} sentences The sentences to filter through.
 * @returns {array} Array with all the sentences considered to be too long.
 */
function getTooLongSentences(sentences) {
    return checkForTooLongSentences(sentences, 20);
}

function formatNumber(number) {
    if (Math.round(number) === number) {
        return Math.round(number);
    }

    return Math.round(number * 10) / 10;
}

/**
 * Get the total amount of sentences that are qualified as being too long.
 *
 * @param {Array} sentences The sentences to filter through.
 * @returns {Number} The amount of sentences that are considered too long.
 */
function countTooLongSentences(sentences) {
    return getTooLongSentences(sentences).length;
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
 * Checks if `n` is between `start` and `end` but not including `start`.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function inRangeEndInclusive(number, start, end) {
    return number > start && number <= end;
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
    if ($('#readability-bad-collapsible').children('.seo-sentence-length').length > 0){
        $('#readability-bad-collapsible').children('.seo-sentence-length').remove();
    } else if ($('#readability-improve-collapsible').children('.seo-sentence-length').length > 0){
        $('#improve-collapsible').children('.seo-sentence-length').remove();
    } else if ($('#readability-good-collapsible').children('.seo-sentence-length').length > 0){
        $('#readability-good-collapsible').children('.seo-sentence-length').remove();
    }

    const sentencePaper = new Paper( jQuery('#product-description').summernote('code'), {} );
    const sentenceResearcher = new Researcher( sentencePaper );
    const sentences = sentenceResearcher.getResearch( "countSentencesFromText" );

    const percentage = calculatePercentage(sentences);
    const score = calculateSentenceLengthScore(percentage);
    let sentenceLength = '';

    if (score >= 7) {
        sentenceLength = '<div class="seo-score seo-sentence-length"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/the-sentence-length-check" target="_blank">Sentence length:</a> Great!</span></div>';
        $('#readability-good-collapsible').append(sentenceLength);
        return true;
    }

    sentenceLength = '<div class="seo-score seo-sentence-length"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/how-to-use-headings-on-your-site" target="_blank">Sentence length: </a>'+percentage+'% of the sentences contain more than 20 words, which is more than the recommended maximum of 25.<a href="https://yoast.com/the-sentence-length-check" target="_blank">Try to shorten the sentences</a></span></div>';
    $('#readability-bad-collapsible').append(sentenceLength);
    return true;
}
calculateSentenceLengthResult();

function checkLinks() {
    if ($('#bad-collapsible').children('.url-score').length > 0){
        $('#bad-collapsible').children('.url-score').remove();
    } else if ($('#improve-collapsible').children('.url-score').length > 0){
        $('#improve-collapsible').children('.url-score').remove();
    } else if ($('#good-collapsible').children('.url-score').length > 0){
        $('#good-collapsible').children('.url-score').remove();
    }

    const linkPaper = new Paper( jQuery('#product-description').summernote('code'), {} );
    const linkResearcher = new Researcher( linkPaper );
    const linkStatistics = linkResearcher.getResearch( "getLinkStatistics" );
    console.log(linkStatistics);
    let internalLinksChecker = '';

    if (linkStatistics.internalTotal === 0) {
        internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: No internal links appear in this page, ' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">make sure to add some!</a></span></div>';
        $('#bad-collapsible').append(internalLinksChecker);
        return true;
    }

    if (linkStatistics.internalNofollow === linkStatistics.internalTotal) {
        internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: The internal links in this page are all nofollowed. ' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Add some good internal links.</a></span></div>';
        $('#improve-collapsible').append(internalLinksChecker);
        return true;
    }

    if (linkStatistics.internalDofollow === linkStatistics.internalTotal) {
        internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: You have enough internal links. Good job! ' +
            '</span></div>';
        $('#good-collapsible').append(internalLinksChecker);
        return true;
    }

    internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: There are both nofollowed and normal internal links on this page. Good job! ' +
        '</span></div>';
    $('#good-collapsible').append(internalLinksChecker);
    return true;
}
//checkLinks();

function passiveVoiceCheck() {
    let passiveVoiceCheck = '';
    let score;
    let passivePercentage = 0;
    const passivePaper = new Paper( jQuery('#product-description').summernote('code'), {
        title: $(".preview-title").text(),
        description: $(".preview-description").text(),
        url: $("#previewSlug").text()
    } );
    const passiveResearcher = new Researcher( passivePaper );
    const passiveVoice = passiveResearcher.getResearch("passiveVoice");

    if (passiveVoice.total !== 0) {
        passivePercentage = formatNumber(passiveVoice.passives.length / passiveVoice.total * 100);
    }
    // console.log(passiveVoice);

    if (passivePercentage <= 10) {
        // Green indicator.
        score = 9;
    }

    if (inRangeEndInclusive(passivePercentage, 10, 15)) {
        // Orange indicator.
        score = 6;
    }

    if (passivePercentage > 15) {
        // Red indicator.
        score = 3;
    }

    if ($('#readability-bad-collapsible').children('.seo-passive').length > 0){
        $('#readability-bad-collapsible').children('.seo-passive').remove();
    } else if ($('#readability-improve-collapsible').children('.seo-passive').length > 0){
        $('#readability-improve-collapsible').children('.seo-passive').remove();
    } else if ($('#readability-good-collapsible').children('.seo-passive').length > 0){
        $('#readability-good-collapsible').children('.seo-passive').remove();
    }

    if (score >= 7) {
        passiveVoiceCheck = '<div class="seo-score seo-passive"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Passive Voice</a>: You\'re using enough active voice. That\'s great!' +
            '</span></div>';
        $('#readability-good-collapsible').append(passiveVoiceCheck);
        return true;
    }

    passiveVoiceCheck = '<div class="seo-score seo-passive"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Passive Voice</a>: '+passivePercentage+'% of the sentences contain passive voice, which is more than the recommended maximum of 10%. ' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Try to use their active counterparts.</a></span></div>';
    $('#readability-bad-collapsible').append(passiveVoiceCheck);
    return true;
}
passiveVoiceCheck();

function calculateTransitionWordPercentage(sentences,countWordSentences) {
    console.log(sentences);
    console.log('sentences are ');
    console.log(countWordSentences);
    if (sentences.transitionWordSentences === 0 || countWordSentences.length === 0) {
        return 0;
    }

    return formatNumber(sentences.transitionWordSentences / countWordSentences.length * 100);
}

/**
 * Checks if `n` is between `start` and up to, but not including, `end`.
 *
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function inRangeStartInclusive(number, start, end) {
    return number >= start && number < end;
}

function calculateScoreFromPercentage(percentage) {
    if (percentage < 20) {
        // Red indicator.
        return 3;
    }

    if (inRangeStartInclusive(percentage, 20, 30)) {
        // Orange indicator.
        return 6;
    }

    if (percentage >= 30) {
        // Green indicator.
        return 9;
    }
}

function transitionAnalysis(){
    if ($('#readability-bad-collapsible').children('.seo-transition').length > 0){
        $('#readability-bad-collapsible').children('.seo-transition').remove();
    } else if ($('#readability-improve-collapsible').children('.seo-transition').length > 0){
        $('#readability-improve-collapsible').children('.seo-transition').remove();
    } else if ($('#readability-good-collapsible').children('.seo-transition').length > 0){
        $('#readability-good-collapsible').children('.seo-transition').remove();
    }

    const transitionPaper = new Paper( $($("#product-description").summernote("code")).text(), {} );
    const transitionResearcher = new Researcher( transitionPaper );
    const transitionWordSentences = transitionResearcher.getResearch("findTransitionWords");
    const countWordSentences = transitionResearcher.getResearch("countSentencesFromText");

    const percentage = calculateTransitionWordPercentage(transitionWordSentences,countWordSentences);
    const score = calculateScoreFromPercentage(percentage);
    let seoTransitions ='';

    console.log(transitionPaper);
    console.log(transitionResearcher);

    if (score < 7 && percentage === 0) {
        seoTransitions = '<div class="seo-score seo-transition"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoa.st/34z" target="_blank">Transition words</a>: None of the sentences contain transition words. <a href="https://yoa.st/35a" target="_blank">Use some</a>.</span></div>';
        $('#readability-bad-collapsible').append(seoTransitions);
        return true;
    }

    if (score < 7) {
        seoTransitions = '<div class="seo-score seo-transition"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
            '<a href="https://yoa.st/34z" target="_blank">Transition words</a>: Only '+ percentage + '% of the sentences contain transition words, which is not enough. <a href="https://yoa.st/35a" target="_blank">Use more of them</a>.</span></div>';
        $('#readability-improve-collapsible').append(seoTransitions);
        return true;
    }

    seoTransitions = '<div class="seo-score seo-transition"><span class="seo-score-icon good"></span><span class="seo-score-text"><a href="https://yoa.st/34z" target="_blank">Transition words</a>: Well done!</span></div>';
    $('#readability-good-collapsible').append(seoTransitions);
    return true;
}
transitionAnalysis();

$(document).ready(function() {
    console.log( researcher.getResearch( "countSentencesFromText" ) );
    console.log( researcher.getResearch( "findTransitionWords" ) );
    $('#product-description').on('summernote.change', function (we, contents, $editable) {
        calculateSentenceLengthResult();
        passiveVoiceCheck();
        transitionAnalysis();
        //checkLinks();
    });
});
