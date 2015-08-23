var postcss = require('postcss');
var expect  = require('chai').expect;

var inlineComment = require('../');
var customProperties = require('postcss-custom-properties');
var cssVariables = require('postcss-css-variables');
var simpleVars = require('postcss-simple-vars');

var test = function(plugins, input, output, done) {
    postcss(plugins).process(input).then(
        function(result) {
            expect(result.css).to.eql(output);
            done();
        }
    );
};

describe('postcss-inline-comment', function() {
    it('Remove the declaration', function(done) {
        test([ inlineComment() ],
        '.foo{ //margin: 0; padding: 0; }',
        '.foo{ padding: 0; }',
        done);
    });
});

describe('use with CSS variable plugins', function() {
    it('Remove the declaration if used "custom-properties"', function(done) {
        test([ customProperties(), inlineComment() ],
        ':root { --color: red; } .foo{ margin: 0; //color: var(--color); }',
        '.foo{ margin: 0; }',
        done);
    });

    it('Remove the declaration if used "css-variables"', function(done) {
        test([ cssVariables(), inlineComment() ],
        ':root { --color: red; } .foo{ margin: 0; //color: var(--color); }',
        '.foo{ margin: 0; }',
        done);
    });

    it('Remove the declaration if used "simple-vars" (Sass)', function(done) {
        test([ simpleVars(), inlineComment() ],
        '$color: red; .foo{ margin: 0; //color: $color; }',
        '.foo{ margin: 0; }',
        done);
    });
});
