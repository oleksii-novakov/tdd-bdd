var assert = require('assert'),
    app = require('../index2.js').app;

describe('app.squareNum()', function() {
    var tests = [
        {args: 2,    expected: 4},
        {args: 3,    expected: 9}
    ];

    tests.forEach(function(test) {
        it('correct multiply', function() {
            var res = app.squareNum(test.args);
            assert.equal(res, test.expected);
        });
    });
});