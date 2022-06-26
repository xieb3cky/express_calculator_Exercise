const {
    findMean,
    findMedian,
    findMode,
} = require("./helper");

describe("findMedian", function () {
    it("finds the median of an even set", function () {
        expect(findMedian([1, 3, 5, 7])).toEqual(4)
    })
    it("finds the median of an odd set", function () {
        expect(findMedian([1, 3, 5, 7, 10])).toEqual(5)
    })
})

describe("findMean", function () {
    it("finds the mean of an empty array", function () {
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () {
        expect(findMean([1, 3, 5, 7, 1])).toEqual(3.4)
    })
})

describe("findMode", function () {
    it("finds the mode", function () {
        expect(findMode([1, 3, 5, 7, 1])).toEqual(1)
    })
})