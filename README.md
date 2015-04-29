# PostCSS Inline Comments [![Build Status](https://travis-ci.org/moczolaszlo/postcss-inline-comment.svg)](https://travis-ci.org/moczolaszlo/postcss-inline-comment) [![Dependencies](https://david-dm.org/moczolaszlo/postcss-inline-comment.svg)](https://david-dm.org/moczolaszlo/postcss-inline-comment)

[PostCSS](https://github.com/postcss/postcss) plugin to use inline comments in CSS. The only thing I missed.

## Installation

```
$ npm i postcss-inline-comment --save-dev
```
## Usage

With Node.js:
```js
var fs = require('fs'),
    postcss = require('postcss'),
    inlineComment = require('postcss-inline-comment');

var css = fs.readFileSync('style.css', 'utf8');

var output = postcss()
	   .use(inlineComment())
	   .process(css).css;
```

With Grunt via [grunt-postcss](https://github.com/nDmitry/grunt-postcss/)
```js
module.exports = function(grunt) {
    grunt.initConfig({
      postcss: {
        options: {
          processors: [
              require('postcss-inline-comment')
          ]
        },
        dist: {
          src: 'src/style.css',
          dest: 'dest/style.css'
        }
      }
    });

    grunt.loadNpmTasks('grunt-postcss');
};
```

With gulp.js via [gulp-postcss](https://github.com/postcss/gulp-postcss)
```js
var gulp = require('gulp');
var postCSS = require('gulp-postcss');
var postCSS_InlineComment = require('postcss-inline-comment');

gulp.task('postcss', function(){
	gulp.src('src/style.css')
		.pipe(postCSS([ postCSS_InlineComment() ]))
		.pipe(gulp.dest('dest'));
});
```

### Using this 'style.css':

```css
.foo {
  //margin: 0;
  padding: 0;
}
```

you will get:

```css
.foo {
  padding: 0;
}
```
(But it's only works for declarations inside rules, yet.)

## Options
Nope.
