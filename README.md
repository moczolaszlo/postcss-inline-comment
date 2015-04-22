# PostCSS Inline Comments [![Build Status](https://travis-ci.org/moczolaszlo/postcss-inline-comment.svg)](https://travis-ci.org/moczolaszlo/postcss-inline-comment)

[PostCSS](https://github.com/postcss/postcss) plugin to use inline comments in CSS. The only thing I missed.

## Installation

```
$ npm i postcss-inline-comment
```
## Usage

```js
var fs = require('fs'),
    postcss = require('postcss'),
    inlineComment = require('postcss-inline-comment');

var css = fs.readFileSync('style.css', 'utf8');

var output = postcss()
	   .use(inlineComment())
	   .process(css).css;
```

Using this 'style.css':

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

## Options
Nope.
