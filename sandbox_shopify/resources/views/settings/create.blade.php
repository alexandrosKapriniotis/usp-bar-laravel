@extends('extended-layout')
<link rel="stylesheet" type="text/css" href="{{ url('/css/tailwind.css') }}" />

@section('content')
    <div id="wrapper">
        <div id="page" class="container">
            <form method="post" id="settingsDropzone" class="dropzone" enctype="multipart/form-data" action="/settings">
                @csrf
                <div class="row pt-5">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header" style="padding-top: 0">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">Title</h2>
                            <div class="Polaris-Layout__AnnotationDescription"><p>Enter the name for your bar. This will be only visible to you.</p></div>
                        </div>
                    </div>

                    <div class="col-md-8 Polaris-Card">
                        <div style="padding: 20px 10px;">
                            <label for="name">Name</label>
                            <input id="name" type="text" name="name" value="{{ old('name') }}" class="form-control" />
                        </div>
                    </div>

                </div>
                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">General Settings</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-3 sm:col-span-3">
                                    <div class="enable-switch">
                                        <label for="enabled" class="block text-sm font-semibold leading-5 text-gray-700">Enabled/Disabled</label>
                                        <input id="enabled" type="checkbox"  name="enabled" value="1" @if (old('enabled') === 1) checked  @endif  class="block form-checkbox text-indigo-600 transition duration-150 ease-in-out">
                                    </div>
                                </div>

                                <div class="col-span-3 sm:col-span-3">
                                    <label for="desktop_only" class="block text-sm font-semibold leading-5 text-gray-700">Desktop Only</label>
                                    <input id="desktop_only" type="checkbox" name="desktop_only" value="1"  @if (old('desktop_only') === 1) checked  @endif class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                </div>

                                <div class="col-span-3 sm:col-span-3">
                                    <label for="homepage_only" class="block text-sm font-semibold leading-5 text-gray-700">Homepage Only</label>
                                    <input id="homepage_only" type="checkbox" name="homepage_only" value="1"  @if (old('homepage_only') === 1) checked  @endif class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                </div>

                                <div class="col-span-12 sm:col-span-12">
                                    <label for="container_width" class="block font-medium leading-5 text-gray-700">Container Width</label>
                                    <select name="container_width" id="container_width" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out">
                                        <option @if (old('container_width') === 'boxed') selected  @endif value="boxed">Boxed</option>
                                        <option @if (old('container_width') === 'full-width') selected  @endif value="full-width">Full Width</option>
                                    </select>
                                </div>

                                <div class="col-span-12 sm:col-span-12">
                                    <label for="css_class" class="block text-sm font-semibold leading-5 text-gray-700">Css Class</label>
                                    <input id="css_class" type="text" value="{{ old('css_class') }}" class="form-control">
                                </div>

                                <div class="col-span-12  sm:col-span-12">
                                    <label for="padding" class="block text-sm font-semibold leading-5 text-gray-700">Padding</label>
                                    <input id="padding" type="text" name="padding" value="{{ old('padding') }}" class="block form-input">
                                </div>

                                <div class="col-span-12 sm:col-span-12">
                                    <label for="columns" class="block text-sm font-semibold leading-5 text-gray-700">Columns</label>
                                    <select name="columns" id="columns" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                        <option @if (old('columns') === 1) selected  @endif value="1">1</option>
                                        <option @if (old('columns') === 2) selected  @endif value="2">2</option>
                                        <option @if (old('columns') === 3) selected  @endif value="3">3</option>
                                        <option @if (old('columns') === 4) selected  @endif value="4">4</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">First Column</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div id="first-section">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="first_section_link" class="font-semibold">Link</label>
                                        <input id="first_section_link" type="text" name="first_section_link" value="{{ old('first_section_link') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="first_section_link_option" class="font-semibold">Link Options</label>
                                        <select name="first_section_link_option" id="first_section_link_option" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('first_section_link_option') === '_self') selected  @endif value="_self">Default</option>
                                            <option @if (old('first_section_link_option') === '_blank') selected  @endif value="_blank">open in new window</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4 sm:col-span-4">
                                        <label for="first_section_title" class="font-semibold">Title</label>
                                        <input id="first_section_title" type="text" name="first_section_title" value="{{ old('first_section_title') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4 sm:col-span-4">
                                        <label for="first_section_title_text_size" class="font-semibold">Title text size</label>
                                        <input id="first_section_title_text_size" type="text" name="first_section_title_text_size" value="{{ old('first_section_title_text_size') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4 sm:col-span-4">
                                        <label for="first_section_title_text_color" class="font-semibold">Title text colour</label>
                                        <input id="first_section_title_text_color" type="text" name="first_section_title_text_color" value="{{ old('first_section_title_text_color') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <div class="custom-file-container" id="firstImage" data-upload-id="firstImage">
                                            <input type="hidden" name="first_section_image" id="first_section_image" value="{{ old('first_section_image') }}">
                                            <label>Upload File
                                                <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a>
                                            </label>
                                            <label class="custom-file-container__custom-file">
                                                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="*" aria-label="Choose File" name="first_image"/>
                                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                <span class="custom-file-container__custom-file__custom-file-control"></span>
                                            </label>
                                            <div class="custom-file-container__image-preview"></div>
                                        </div>
                                    </div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="first_section_image_position" class="font-semibold">Image Position</label>
                                        <select name="first_section_image_position" id="first_section_image_position" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('first_section_image_position') === 'top') selected  @endif value="top">Top</option>
                                            <option @if (old('first_section_image_position') === 'left') selected  @endif value="left">Left</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4 sm:col-span-4">
                                        <label for="first_section_title_text_align" class="font-semibold">Image Position</label>
                                        <select name="first_section_title_text_align" id="first_section_title_text_align" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('first_section_title_text_align') === 'left') selected  @endif value="left">Left</option>
                                            <option @if (old('first_section_title_text_align') === 'right') selected  @endif value="right">Right</option>
                                            <option @if (old('first_section_title_text_align') === 'center') selected  @endif value="center">Center</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12 sm:col-span-12">
                                        <div class="summernote">
                                            <label for="first_section_message">Content Area</label>
                                            <textarea name="first_section_message" id="first_section_message" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{ old('first_section_message') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">Second Column</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div id="second-section">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="second_section_link" class="font-semibold">Link</label>
                                        <input id="second_section_link" type="text" name="second_section_link" value="{{ old('second_section_link') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6">
                                        <label for="second_section_link_option" class="font-semibold">Link Options</label>
                                        <select name="second_section_link_option" id="second_section_link_option" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('second_section_link_option') === '_self') selected  @endif value="_self">Default</option>
                                            <option @if (old('second_section_link_option') === '_blank') selected  @endif value="_blank">open in new window</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <label for="second_section_title" class="font-semibold">Title</label>
                                        <input id="second_section_title" type="text" name="second_section_title" value="{{ old('second_section_title') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="second_section_title_text_size" class="font-semibold">Title text size</label>
                                        <input id="second_section_title_text_size" type="text" name="second_section_title_text_size" value="{{ old('second_section_title_text_size') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="second_section_title_text_color" class="font-semibold">Title text colour</label>
                                        <input id="second_section_title_text_color" type="text" name="second_section_title_text_color" value="{{ old('second_section_title_text_color') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="second_section_title_text_align" class="font-semibold">Text Align</label>
                                        <select name="second_section_title_text_align" id="second_section_title_text_align" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('second_section_title_text_align') === 'left') selected  @endif value="left">Left</option>
                                            <option @if (old('second_section_title_text_align') === 'right') selected  @endif value="right">Right</option>
                                            <option @if (old('second_section_title_text_align') === 'center') selected  @endif value="center">Center</option>
                                        </select>
                                    </div>

                                    <div class="col-span-6">
                                        <div class="custom-file-container" id="secondImage" data-upload-id="secondImage">
                                            <input type="hidden" name="second_section_image" id="second_section_image" value="{{ old('second_section_image') }}">
                                            <label>Upload File
                                                <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a>
                                            </label>
                                            <label class="custom-file-container__custom-file">
                                                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="*" aria-label="Choose File" name="first_image"/>
                                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                <span class="custom-file-container__custom-file__custom-file-control"></span>
                                            </label>
                                            <div class="custom-file-container__image-preview"></div>
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="second_section_image_position" class="font-semibold">Image Position</label>
                                        <select name="second_section_image_position" id="second_section_image_position" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('second_section_image_position') === 'top') selected  @endif value="top">Top</option>
                                            <option @if (old('second_section_image_position') === 'left') selected  @endif value="left">Left</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <div class="summernote">
                                            <label for="second_section_message" class="font-semibold">Content Area</label>
                                            <textarea name="second_section_message" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="second_section_message">{{ old('second_section_message') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">Third Column</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div id="third-section">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="third_section_link">Third Section Link</label>
                                        <input id="third_section_link" type="text" name="third_section_link" value="{{ old('third_section_link') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6">
                                        <label for="third_section_link_option">Link Options</label>
                                        <select name="third_section_link_option" id="third_section_link_option" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('third_section_link_option') === '_self') selected  @endif value="_self">Default</option>
                                            <option @if (old('third_section_link_option') === '_blank') selected  @endif value="_blank">Open in new window</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <label for="third_section_title">Third Section Title</label>
                                        <input id="third_section_title" type="text" name="third_section_title" value="{{ old('third_section_title') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6">
                                        <div class="custom-file-container" id="thirdImage" data-upload-id="thirdImage">
                                            <input type="hidden" id="third_section_image" name="third_section_image" value="{{ old('third_section_image') }}">
                                            <label>Upload File
                                                <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a>
                                            </label>
                                            <label class="custom-file-container__custom-file">
                                                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="*" aria-label="Choose File" name="first_image"/>
                                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                <span class="custom-file-container__custom-file__custom-file-control"></span>
                                            </label>
                                            <div class="custom-file-container__image-preview"></div>
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="third_section_image_position">Image Position</label>
                                        <select name="third_section_image_position" id="third_section_image_position" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option value="top">Top</option>
                                            <option value="left">Left</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4">
                                        <label for="third_section_title_text_size">Title text size</label>
                                        <input id="third_section_title_text_size" type="text" name="third_section_title_text_size" value="{{ old('third_section_title_text_size') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="third_section_title_text_color">Title text colour</label>
                                        <input id="third_section_title_text_color" type="text" name="third_section_title_text_color" value="{{ old('third_section_title_text_color') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="third_section_title_text_align">Text Align</label>
                                        <select name="third_section_title_text_align" id="third_section_title_text_align" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('third_section_title_text_align') === 'left') selected  @endif value="left">Left</option>
                                            <option @if (old('third_section_title_text_align') === 'right') selected  @endif value="right">Right</option>
                                            <option @if (old('third_section_title_text_align') === 'center') selected  @endif value="center">Center</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <div class="summernote">
                                            <label for="third_section_message">Content Area</label>
                                            <textarea name="third_section_message" id="third_section_message" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{old('third_section_message')}}</textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="Polaris-Card__Header">
                            <h2 class="text-lg font-medium leading-6 text-gray-900">Fourth Column</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div id="third-section">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="fourth_section_link">Section Link</label>
                                        <input id="fourth_section_link" type="text" name="fourth_section_link" value="{{ old('fourth_section_link') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6">
                                        <label for="fourth_section_link_option">Link Options</label>
                                        <select name="fourth_section_link_option" id="fourth_section_link_option" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('fourth_section_link_option') === '_self') selected  @endif value="_self">Default</option>
                                            <option @if (old('fourth_section_link_option') === '_blank') selected  @endif value="_blank">Open in new window</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <label for="fourth_section_title">Section Title</label>
                                        <input id="fourth_section_title" type="text" name="fourth_section_title" value="{{ old('fourth_section_title') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-6">
                                        <div class="custom-file-container" id="fourthImage" data-upload-id="fourthImage">
                                            <input type="hidden" name="fourth_section_image" id="fourth_section_image" value="{{ old('fourth_section_image') }}">
                                            <label>Upload File
                                                <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a>
                                            </label>
                                            <label class="custom-file-container__custom-file">
                                                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="*" aria-label="Choose File" name="first_image"/>
                                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                <span class="custom-file-container__custom-file__custom-file-control"></span>
                                            </label>
                                            <div class="custom-file-container__image-preview"></div>
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="fourth_section_image_position">Image Position</label>
                                        <select name="fourth_section_image_position" id="fourth_section_image_position" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('fourth_section_image_position') === 'top') selected  @endif value="top">Top</option>
                                            <option @if (old('fourth_section_image_position') === 'left') selected  @endif value="left">Left</option>
                                        </select>
                                    </div>

                                    <div class="col-span-4">
                                        <label for="fourth_section_title_text_size">Title text size</label>
                                        <input id="fourth_section_title_text_size" type="text" name="fourth_section_title_text_size" value="{{ old('fourth_section_title_text_size') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="fourth_section_title_text_color">Title text colour</label>
                                        <input id="fourth_section_title_text_color" type="text" name="fourth_section_title_text_color" value="{{ old('fourth_section_title_text_color') }}" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    </div>

                                    <div class="col-span-4">
                                        <label for="fourth_section_title_text_align">Text Align</label>
                                        <select name="fourth_section_title_text_align" id="fourth_section_title_text_align" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option @if (old('fourth_section_title_text_align') === 'left') selected  @endif value="left">Left</option>
                                            <option @if (old('fourth_section_title_text_align') === 'right') selected  @endif value="right">Right</option>
                                            <option @if (old('fourth_section_title_text_align') === 'center') selected  @endif value="center">Center</option>
                                        </select>
                                    </div>

                                    <div class="col-span-12">
                                        <div class="summernote">
                                            <label for="fourth_section_message">Content Area</label>
                                            <textarea name="fourth_section_message" id="fourth_section_message" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{old('fourth_section_message')}}</textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:block">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div  class="col-12 text-right">
                        <button class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

