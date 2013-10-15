"use strict";
var assert = require("assert");
var bubble_sort = require("./bubble_sort");
var compare = require("./compare");

describe('Compare two arrays by value', function () {
    it('compares two empty arrays', function () {
        assert.ok(compare([], []));
    });
    it('compares empty array and non empty array', function () {
        assert.ok(!compare([], [0]));
    });
    describe('compares arrays with one value', function () {
        it('compares equal array', function () {
            assert.ok(compare([0], [0]));
        });
        it('compares unequal array', function () {
            assert.ok(!compare([0], [1]));
        });
    });
    describe('compares arrays with two values', function () {
        it('compares equal array', function () {
            assert.ok(compare([2, 3], [2, 3]));
        });
        it('compares unequal array', function () {
            assert.ok(!compare([0, 1], [1, 2]));
        });
    });
});

function check_sort(array1, n) {
    var sorted_array = bubble_sort(n);
    assert.ok(compare(array1, sorted_array), 'result: [' + array1 + '] [' + sorted_array + ']');
}

describe('Bubble Sort', function () {
    it('should return empty array', function () {
        check_sort([], []);
    });
    it('one element', function () {
        check_sort([0], [0]);
    });
    describe('two elements', function () {
        it('in order', function () {
            check_sort([0, 1], [0, 1]);
        });
        it('out of order', function () {
            check_sort([0, 1], [1, 0]);
        });
    });
    describe('two elements', function () {
        it('three elements, in order', function () {
            check_sort([0, 1, 2], [0, 1, 2]);
        });
        it('three elements, out of order', function () {
            check_sort([0, 1, 2], [2, 1, 0]);
        });
    });

});

