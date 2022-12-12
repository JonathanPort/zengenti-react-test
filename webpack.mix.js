let mix = require('laravel-mix');


mix.js('resources/react/app.js', 'public/js')
   .react()
   .sourceMaps();

mix.sass('resources/scss/app.scss', 'public/css');

mix.copy('resources/images', 'public/images')
   .copy('resources/favicons', 'public/favicons');
