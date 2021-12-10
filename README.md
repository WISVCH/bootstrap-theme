# Bootstrap for WISVCH

Powered by Themestrap. **Themestrap** is a simple starter kit for constructing Twitter Bootstrap 3+ themes. It provides the skeleton
for a simple, maintainable theme that always uses code directly from Bootstrap with as little replacement as
possible.

## Usage

See https://wisvch.github.io/bootstrap-theme/

## Development

### Setup

Install dependencies using
[Gulp](http://gulpjs.com) and [Bower](https://github.com/bower/bower) (you must have these
installed).

    npm install
    bower install

Now you're ready to go! Simply edit `sass/variables.less` and `sass/theme.less` to your liking.
When you're ready, just run `gulp` and it will compile and minify the distribution for you.
<!-- You can also run `grunt watch` to automatically compile as you work. -->

### Testing Out

We've provided a "Bootstrap Kitchen Sink" HTML file at `examples/kitchen-sink.html` that contains
all of the various components in all of their variations. It may not be 100% exhaustive but it
should give you a good idea of what your theme will look like at a glance.

<!-- You can start a development server at `http://localhost:8000` by running `grunt serve`. Your theme will automatically compile while the server is running. -->

## Copyright and license

Copyright 2021 W.I.S.V. 'Christiaan Huygens'; copyright 2013 Divshot, Inc. under [the Apache 2.0 license](LICENSE).