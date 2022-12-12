<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- @include('includes.app-meta') --}}

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        @stack('seo-meta')

    </head>
    <body class="theme--light">

        {{-- React.js Start --}}
        <div id="react-root" class="app-container"></div>

        <script async defer src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
