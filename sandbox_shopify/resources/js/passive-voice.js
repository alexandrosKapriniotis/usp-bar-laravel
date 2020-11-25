let passive = require('passive-voice');
let passiveVoiceCheck = '';

function getPassivePercentage() {
    let passiveSentences = 0;
    let sentencesArray = $.trim($($("#product-description").summernote("code")).text()).split(".");

    sentencesArray.forEach(function () {
        if (passive($(this).text()).length > 0){
            passiveSentences++;
        }
    });
    return (passiveSentences * sentencesArray.length) / 100;
}

let passivePercentage = getPassivePercentage();

if ($('#readability-bad-collapsible').children('.seo-passive').length > 0){
    $('#readability-bad-collapsible').children('.seo-passive').remove();
} else if ($('#readability-improve-collapsible').children('.seo-passive').length > 0){
    $('#readability-improve-collapsible').children('.seo-passive').remove();
} else if ($('#readability-good-collapsible').children('.seo-passive').length > 0){
    $('#readability-good-collapsible').children('.seo-passive').remove();
}

if (passivePercentage < 10){
    passiveVoiceCheck = '<div class="seo-score seo-passive"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Passive Voice</a>: You\'re using enough active voice. That\'s great!' +
        '</span></div>';
    $('#readability-good-collapsible').append(passiveVoiceCheck);
} else if(passivePercentage < 15) {
    passiveVoiceCheck = '<div class="seo-score seo-passive"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Passive Voice</a>: '+passivePercentage+' of the sentences contain passive voice, which is more than the recommended maximum of 10%. ' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Try to use their active counterparts.</a></span></div>';
    $('#readability-improve-collapsible').append(passiveVoiceCheck);
} else {
    passiveVoiceCheck = '<div class="seo-score seo-passive"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Passive Voice</a>: '+passivePercentage+' of the sentences contain passive voice, which is more than the recommended maximum of 10%. ' +
        '<a href="https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it" target="_blank">Try to use their active counterparts.</a></span></div>';
    $('#readability-bad-collapsible').append(passiveVoiceCheck);
}



