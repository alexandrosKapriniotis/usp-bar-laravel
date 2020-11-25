
'use strict';
    let productDescription = $("#product-description").text();
    let keyphraseField = $('#keyphraseField').text();
    let previewDescription = $.trim($('.preview-description').text());
    let seoKeyphrase = '';
    let textLength = '';
    let seoPreviewDescription = '';
    let startIndex = 0;

    /* Check for links */
    function urlChecker(text) {
        if (text.find('a').length > 0){
        let internalLinks = 0;
        let externalLinks = 0;
        let internalLinksChecker = '';
        let outboundLinksChecker = '';

        text.find('a').each(
            function(){
                // let hostname = window.parent.location.hostname;
                let linkHostname = $(this).prop('hostname');
                let previewLink = document.createElement('a');
                previewLink.href = $('.preview-link').text();

           if (previewLink.hostname === linkHostname){
                internalLinks++;
            } else {
                externalLinks++;
            }
        });

        if ($('#bad-collapsible').children('.url-score').length > 0){
            $('#bad-collapsible').children('.url-score').remove();
        } else if ($('#improve-collapsible').children('.url-score').length > 0){
            $('#improve-collapsible').children('.url-score').remove();
        } else if ($('#good-collapsible').children('.url-score').length > 0){
            $('#good-collapsible').children('.url-score').remove();
        }
        if (internalLinks === 0){
            internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: No internal links appear in this page, ' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">make sure to add some!</a></span></div>';
            $('#bad-collapsible').append(internalLinksChecker);
        } else {
            internalLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Internal links</a>: You have enough internal links. Good job!';
            $('#good-collapsible').append(internalLinksChecker);
        }

        if (externalLinks === 0){
            outboundLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Outbound links</a>: No outbound links appear in this page, ' +
            '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Add some!</a></span></div>';
            $('#bad-collapsible').append(outboundLinksChecker);
        } else {
                outboundLinksChecker = '<div class="seo-score url-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/internal-linking-for-seo-why-and-how" target="_blank">Outbound links</a>: Good job!';
                $('#good-collapsible').append(outboundLinksChecker);
        }
            // return {internalLinks : internalLinks,externalLinks: externalLinks};
            return true;
        } else {
            return false;
        }
    }

    /* Meta Description Length */
    function metaDescriptionLengthChecker(){
        if ($('#bad-collapsible').children('.meta-description-score').length > 0){
            $('#bad-collapsible').children('.meta-description-score').remove();
        } else if ($('#improve-collapsible').children('.meta-description-score').length > 0){
            $('#improve-collapsible').children('.meta-description-score').remove();
        } else if ($('#good-collapsible').children('.meta-description-score').length > 0){
            $('#good-collapsible').children('.meta-description-score').remove();
        }

        if ( ($('.preview-description').text().length) === 0 ){
            seoPreviewDescription = '<div class="seo-score meta-description-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank">Meta description length:</a> No meta description has been specified. Search engines will display copy from the page instead.' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank">Make sure to write one!</a></span></div>';
            $('#bad-collapsible').append(seoPreviewDescription);
            return true;
        }
        if ( ($('.preview-description').text().length) <= 120 ){
            seoPreviewDescription = '<div class="seo-score meta-description-score"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank">Meta description length:</a> The meta description is too short (under 120 characters). Up to 156 characters are available.' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank">Use the space!</a></span></div>';
            $('#improve-collapsible').append(seoPreviewDescription);
            return true;
        }

        if ( ($('.preview-description').text().length) > 156) {
            seoPreviewDescription = '<div class="seo-score meta-description-score"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank">Meta description length </a>: The meta description is over 156 characters. To ensure the entire description will be visible,' +
                '<a href="https://yoast.com/meta-descriptions/" target="_blank"> you should reduce the length!</a></span></div>';
            $('#improve-collapsible').append(seoPreviewDescription);
            return true;
        }
        seoPreviewDescription = '<div class="seo-score meta-description-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
            '<a href="https://yoast.com/meta-descriptions/" target="_blank">Meta description length:</a> Well done!' +
            '</span></div>';
        $('#good-collapsible').append(seoPreviewDescription);
        return true;
    }
    metaDescriptionLengthChecker();

    /* Text Length */
    function productDescriptionLengthChecker() {
        if ($('#bad-collapsible').children('.text-length-score').length > 0){
            $('#bad-collapsible').children('.text-length-score').remove();
        } else if ($('#improve-collapsible').children('.text-length-score').length > 0){
            $('#improve-collapsible').children('.text-length-score').remove();
        } else if ($('#good-collapsible').children('.text-length-score').length > 0){
            $('#good-collapsible').children('.text-length-score').remove();
        }

        let cleanDescription = $($("#product-description").summernote("code")).text();

        if (cleanDescription.length < 150) {
            textLength = '<div class="seo-score text-length-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Text length </a>: The text contains ' + cleanDescription.length + ' words.This is far below the recommended minimum of 300 words.' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Add more content</a></span></div>';
            $('#bad-collapsible').append(textLength);
        } else if (cleanDescription.length < 250 && productDescription.length >= 150) {
            textLength = '<div class="seo-score text-length-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Text length </a>: The text contains ' + cleanDescription.length + ' words.This is below the recommended minimum of 300 words.' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Add more content</a></span></div>';
            $('#bad-collapsible').append(textLength);
        } else if (cleanDescription.length < 300 && productDescription.length >= 250) {
            textLength = '<div class="seo-score text-length-score"><span class="seo-score-icon improve"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Text length </a>: The text contains ' + cleanDescription.length + ' words.This is slightly below the recommended minimum of 300 words.' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Add a bit more copy</a></span></div>';
            $('#improve-collapsible').append(textLength);
        } else if (cleanDescription.length > 300) {
            textLength = '<div class="seo-score text-length-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/blog-post-word-count-seo/" target="_blank">Text length </a>: The text contains ' + cleanDescription.length + ' words.Good job!' +
                '</div>';
            $('#good-collapsible').append(textLength);
        }
    }
    productDescriptionLengthChecker();
    /* Keyphrase Check */
    function keyphraseChecker() {
        if (keyphraseField.length === 0) {
            seoKeyphrase = '<div class="seo-score"><span class="seo-score-icon bad"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/why-keyphrase-length-matters" target="_blank">Keyphrase Length </a>: No focus keyphrase was set for this page.' +
                '<a href="https://yoast.com/why-keyphrase-length-matters" target="_blank">Set a keyphrase in order to calculate your SEO score</a></span></div>';
            $('#bad-collapsible').append(seoKeyphrase);
        } else {
            seoKeyphrase = '<div class="seo-score"><span class="seo-score-icon good"></span><span class="seo-score-text">' +
                '<a href="https://yoast.com/why-keyphrase-length-matters" target="_blank">Keyphrase Length </a>: Good Job!</span></div>';
            $('#good-collapsible').append(seoKeyphrase);
        }
    }
    keyphraseChecker();
