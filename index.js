var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-comment', function () {

    return function (css) {

        css.eachDecl(function(decl){
            if (decl.prop.match(/^\/\/.+/)) {
                decl.removeSelf();
            }
        });

    };
});
