@extends('shopify-app::layouts.default')

@section('styles')
    @parent
    <link href="https://unpkg.com/@shopify/polaris@5.5.0/dist/styles.css" media="all" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="{{ url('/css/app.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ url('/css/site.css') }}" />
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">

@endsection

@section('content')
<style>
    @media (min-width: 40em) {
        html, body {
            font-size: 1.4rem;
        }
    }
    html{font-size: 62.5%;}
</style>
<div class="Polaris-Frame__Content pb-5">

    <div class="Polaris-Page pb-5">
        <div class="Polaris-Page-Header Polaris-Page-Header--hasNavigation Polaris-Page-Header--hasActionMenu">
            <div class="Polaris-Page-Header__Navigation">
                <div class="Polaris-Page-Header__BreadcrumbWrapper">
                    <nav role="navigation">
                        <a class="Polaris-Breadcrumbs__Breadcrumb" href="/analysis">
                            <span class="Polaris-Breadcrumbs__ContentWrapper"><span class="Polaris-Breadcrumbs__Icon">
                                    <span class="Polaris-Icon">
                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                            <path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span class="Polaris-Breadcrumbs__Content">Products</span>
                            </span>
                        </a>
                    </nav>
                </div>
            </div>

            <form action="/settings/update-product" method="post">
                @csrf
                <div class="Polaris-Page-Header__MainContent">
                    <div class="Polaris-Page-Header__TitleActionMenuWrapper">
                        <div class="Polaris-Header-Title--hasThumbnail">
                            <div>
                            <span class="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
                                <img src="{{ $product->image->src }}" alt="{{ $product->image->alt }}" class="Polaris-Thumbnail__Image">
                            </span>
                            </div>
                            <div class="Polaris-Header-Title__TitleAndSubtitleWrapper">
                                <div class="Polaris-Header-Title">
                                    <input type="text" name="product-title" class="Polaris-DisplayText Polaris-DisplayText--sizeLarge" id="productTitle" value="{{ $product->title }}" >
                                </div>
                            </div>
                        </div>

                        <div class="Polaris-Page-Header__ActionMenuWrapper">
                            <div class="Polaris-ActionMenu">
                                <div class="Polaris-ActionMenu__ActionsLayout">
                                    <a class="Polaris-ActionMenu-MenuAction" href="https://waterfront-digital-dev-store.myshopify.com/admin/products/{{ $product->id }}" target="_blank" rel="noopener noreferrer">
                                    <span class="Polaris-ActionMenu-MenuAction__ContentWrapper">
                                        <span class="Polaris-ActionMenu-MenuAction__IconWrapper">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M17.086 2.912a3.126 3.126 0 0 0-4.414 0l-9.379 9.379a.998.998 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l9.38-9.379a3.125 3.125 0 0 0 0-4.414zm-1.414 3L15 6.584l-1.586-1.586.672-.672a1.125 1.125 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586zM5.414 12.998L12 6.412l1.586 1.586L7 14.584l-1.586-1.586z" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span>Edit product</span>
                                    </span>
                                    </a>
                                    <a class="Polaris-ActionMenu-MenuAction" href="https://{{ $product_link }}" target="_blank" rel="noopener noreferrer">
                                    <span class="Polaris-ActionMenu-MenuAction__ContentWrapper">
                                        <span class="Polaris-ActionMenu-MenuAction__IconWrapper">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M17.928 9.628C17.836 9.399 15.611 4 9.999 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.162 10.601 4.387 16 9.999 16s7.837-5.399 7.929-5.628a1.017 1.017 0 0 0 0-.744zM9.999 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6A2 2 0 1 0 10 12.001 2 2 0 0 0 10 8z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span>View</span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Polaris-Page-Header__PrimaryActionWrapper">
                        <button type="submit" class="Polaris-Button Polaris-Button--primary">
                            <span class="Polaris-Button__Content">
                                <span class="Polaris-Button__Text" id="product-save">Save</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="Polaris-Layout__Section">
                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Section">
                            <div for="product-description">Description</div>
                            <textarea name="product-description" id="product-description" style="width:100%">
                                {!! $product->body_html !!}
                            </textarea>
                        </div>
                    </div>
                </div>
            </form>


        </div>

        <div class="Polaris-Page__Content">
            <div class="Polaris-Layout">

                <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Header">
                            <h2 class="Polaris-Heading">SEO analysis</h2>
                        </div>

                        <div class="Polaris-Card__Section">
                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-target="#bad-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="bad-collapsible" data-toggle="collapse" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Problems <span id="badCount"></span></p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>

                            <div id="bad-collapsible" aria-hidden="false" class="collapse show" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>

                            <div style="display: flex; align-items: center; margin-bottom: 12px;margin-top:10px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-target="#improve-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="improve-collapsible" data-toggle="collapse" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Improvements <span id="improveCount"></span></p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>
                            <div id="improve-collapsible" aria-hidden="false" class="collapse show" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 12px;margin-top:10px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-toggle="collapse" data-target="#good-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="good-collapsible" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Good results <span id="goodCount"></span></p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>
                            <div id="good-collapsible" aria-hidden="false" class="collapse show" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>
                        </div>
                    </div>

                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Section">
                            <div>Focus Keyword
                                <span style="display: inline-block; vertical-align: sub; margin-left: 5px;">
                                    <span tabindex="0" aria-describedby="PolarisTooltipContent4">
                                        <span class="Polaris-Icon">
                                            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M11 11H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 0 0-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2H9v2zm1-13a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div style="margin-top: 5px;"></div>
                            <div class="">
                                <div class="Polaris-Connected">
                                    <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                        <div class="Polaris-TextField">
                                            <input id="keyphraseField" placeholder="Enter a keyword or phrase" class="Polaris-TextField__Input" aria-labelledby="PolarisTextField1Label" aria-invalid="false" aria-multiline="false" value="">
                                            <div class="Polaris-TextField__Backdrop"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Section">
                            <div class="Polaris-Card__SectionHeader">
                                <h3 class="Polaris-Subheading">
                                    Search engine listing preview
                                    <span style="display: inline-block; vertical-align: sub; margin-left: 5px;">
                                <span tabindex="0" aria-describedby="PolarisTooltipContent5">
                                    <span class="Polaris-Icon">
                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M11 11H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 0 0-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2H9v2zm1-13a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </span>
                                </h3>
                            </div>
                            <div class="preview-meta-box">
                                <p class="preview-title">
                                    @isset($title_tag)
                                        {{trim($title_tag->value)}}
                                    @else
                                        {{$product->title}}
                                    @endisset
                                </p>
                                <p class="preview-link">{{$shop_name}}/products/<span id="previewSlug">{{$product->handle}}</span></p>
                                <p class="preview-description">
                                    @isset($description_tag)
                                        {{trim($description_tag->value)}}
                                    @else
                                        {!! str_limit(strip_tags($product->body_html), $limit = 320, $end = '...') !!}
                                    @endisset
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Section">
                            <label style="font-weight: 600;" for="seoTitle">
                                SEO Title
                            </label>
                            <div style="margin-top: 5px;"></div>
                            <div class="Polaris-Connected">
                                <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                    <div class="Polaris-TextField">
                                        <input id="seoTitle" placeholder="" class="Polaris-TextField__Input" aria-labelledby="PolarisTextField1Label" aria-invalid="false" aria-multiline="false" value="@isset($title_tag){{trim($title_tag->value)}}@else {{$product->title}}@endisset">
                                        <div class="Polaris-TextField__Backdrop"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 5px;"></div>
                            <label style="font-weight: 600;" for="seoSlug">
                                Slug
                            </label>
                            <div style="margin-top: 5px;"></div>
                            <div class="Polaris-Connected">
                                <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                    <div class="Polaris-TextField">
                                        <input id="seoSlug" placeholder="" class="Polaris-TextField__Input" aria-labelledby="PolarisTextField1Label" aria-invalid="false" aria-multiline="false" value="{{$product->handle}}">
                                        <div class="Polaris-TextField__Backdrop"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 5px;"></div>
                            <label style="font-weight: 600;" for="seoDescription">
                                Meta Description
                            </label>
                            <div style="margin-top: 5px;"></div>
                            <div class="Polaris-Connected">
                                <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                    <div class="Polaris-TextField">
                                        <textarea id="seoDescription" placeholder="" class="Polaris-TextField__Input" aria-labelledby="PolarisTextField1Label" aria-invalid="false" aria-multiline="false" style="    font-size: 14px;cursor: text;min-height: 72px;padding: 2px 6px;line-height: 24px;resize: none;">@isset($description_tag){{trim($description_tag->value)}}@else{{ trim(str_limit(strip_tags($product->body_html), $limit = 320, $end = '')) }}@endisset</textarea>
                                        <div class="Polaris-TextField__Backdrop"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-right mt-3">
                                <a href="#" class="Polaris-Button Polaris-Button--primary" id="seoSaveBtn">Update</a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="Polaris-Layout__Section Polaris-Layout__Section--secondary Polaris-Layout__Section--oneHalf">
                    <div class="Polaris-Card">
                        <div class="Polaris-Card__Header">
                            <h2 class="Polaris-Heading">Readability</h2>
                        </div>

                        <div class="Polaris-Card__Section">
                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-toggle="collapse" data-target="#readability-bad-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="readability-bad-collapsible" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Problems <span id="badCount"></span></p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>

                            <div id="readability-bad-collapsible" aria-hidden="false" class="Polaris-Collapsible Polaris-Collapsible--open Polaris-Collapsible--fullyOpen" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>

                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-toggle="collapse" data-target="#readability-improve-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="readability-improve-collapsible" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Improvements</p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>
                            <div id="readability-improve-collapsible" aria-hidden="false" class="Polaris-Collapsible Polaris-Collapsible--open Polaris-Collapsible--fullyOpen" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                                <div style="flex: 1 1 auto;">
                                    <button type="button" data-toggle="collapse" data-target="#readability-good-collapsible" class="Polaris-Button Polaris-Button--plain Polaris-Button--sizeSlim" aria-controls="good-collapsible" aria-expanded="true">
                                <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                        <div style="display: flex;">
                                            <span class="Polaris-Icon">
                                                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                    <path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Good results</p>
                                        </div>
                                    </span>
                                </span>
                                    </button>
                                </div>
                            </div>
                            <div id="readability-good-collapsible" aria-hidden="false" class="Polaris-Collapsible Polaris-Collapsible--open Polaris-Collapsible--fullyOpen" style="max-height: none; transition-duration: 400ms; transition-timing-function: ease;">

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="d-none">
            <input type="hidden" value="" id="getLinkStatistics" />

        </div>
    </div>
</div>
@endsection

@section('scripts')
    @parent
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="{{ url('/js/summernote.min.js') }}"></script>
    <script type="text/javascript">let exports = [];</script>
    <script type="text/javascript" src="{{ url('/js/flesch-kincaid.js') }}"></script>
    <script type="text/javascript" src="{{ url('/js/analysis.js') }}"></script>
{{--    <script type="text/javascript" src="{{ url('/js/passive-voice.js') }}"></script>--}}
    <script type="text/javascript" src="{{ url('/js/lodash.js') }}"></script>
    <script type="text/javascript" src="{{ url('/js/readability.js') }}"></script>
    <script type="text/javascript" src="{{ url('/js/yoast.js') }}"></script>
    <script type="text/javascript">
        $('#product-description').summernote({
            height: 300
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            let summernoteText = $("#product-description").summernote("code");
            let tempDiv =  $('<div id="tempDiv">' + summernoteText + '</div>');
            //urlChecker(tempDiv);

            $('#product-description').on('summernote.change', function (we, contents, $editable) {
                calculateSubheadingDistribution();
                metaDescriptionLengthChecker();
                //urlChecker(tempDiv);
                productDescriptionLengthChecker();
                // keyphraseChecker();
                FleschReadingScoreCheck();
            });

            $('#seoDescription').on('input',function(){
                metaDescriptionLengthChecker();
            });

            $("#seoTitle").on('input',function(){
                $('.preview-title').text($(this).val());
            });

            $("#seoSlug").on('input',function(){
                $('#previewSlug').text($(this).val());
            });

            $("#seoDescription").on('input',function(){
                $('.preview-description').text($(this).val());
            });

            $('#seoSaveBtn').on('click',function(e){
                e.preventDefault();
                let _token   = $('meta[name="csrf-token"]').attr('content');
                $.ajax({
                    url: '/settings/update-seo-fields',
                    method: 'POST',
                    data: {_token: _token,'seo_title' : $('#seoTitle').val(),'seo_slug' : $("#seoSlug").val(),'seo_description' : $('#seoDescription').val()},
                    dataType: 'json',
                    success: function(data) {
                        console.log(data);
                    }
                });
            });

            // $('#product-save').on('click',function(){
            //     let _token   = $('meta[name="csrf-token"]').attr('content');
            //     $.ajax({
            //         url: '/settings/update-product',
            //         method: 'POST',
            //         data: {_token: _token,'title' : $('#productTitle').val(),'body_html' : $('#product-description').text()},
            //         dataType: 'json',
            //         success: function(data) {
            //             console.log(data);
            //         }
            //     });
            // });

        });

        // $("#product-description").on('input',function(){
        //     calculateResult();
        //     transitionAnalysis();
        //     urlChecker();
        //     productDescriptionLengthChecker();
        //     keyphraseChecker();
        // });
    </script>
@endsection
