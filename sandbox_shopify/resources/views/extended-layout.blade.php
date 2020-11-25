@extends('shopify-app::layouts.default')

@section('styles')
    @parent
{{--    <link href="https://unpkg.com/@shopify/polaris@5.5.0/dist/styles.css" media="all" rel="stylesheet" type="text/css" />--}}
    <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ url('/css/site.css') }}" />
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ url('/css/file-upload-with-preview.min.css') }}" />
@endsection

@section('scripts')
@parent
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="{{ url('/js/file-upload-with-preview.min.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>
@endsection

