var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        done();
    });
};

describe('postcss-inline-comment', function () {

    it('Remove the declaration with inline comment', function (done) {
        test('.foo{ //margin: 0; padding: 0; }', '.foo{ padding: 0; }', {}, done);
    });

});
