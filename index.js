var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-comment', function() {

    return function (root) {
        root.walkDecls(function(decl){
            if (decl.prop.match(/^\/\/[\s]?.+/)) {
                decl.remove();
            }
        });
    };
});
