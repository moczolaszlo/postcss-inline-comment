var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-comment', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
});
