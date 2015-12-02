var assert = require('assert'),
    squareNum = require('../index2.js').squareNum;

describe('squareNum()', function() {
    var tests = [
        {args: 2,    expected: 4},
        {args: 3,    expected: 9}
    ];

    tests.forEach(function(test) {
        it('correct multiply', function() {
            var res = squareNum(test.args);
            assert.equal(res, test.expected);
        });
    });
});