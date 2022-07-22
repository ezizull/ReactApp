<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>App</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="antialiased">
    {{-- REACT DOM --}}
    <div id="root"></div>
    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
</body>

</html>
