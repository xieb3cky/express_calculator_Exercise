//Convert string of numbers to array of numbers & check for valid number.

function convertStringToNumsArray(stringNums) {

    let nums = stringNums.split(',');
    let arrNums = nums.map(num => Number(num));
    for (let i = 0; i < arrNums.length; i++) {
        if (Number.isNaN(arrNums[i])) {
            return new Error(`The value ${arrNums[i]} is not a valid number!`)
        }
    }
    return arrNums;
}

function findMean(nums) {
    if (nums.length === 0) return 0;
    sum = 0;
    for (i in nums) {
        sum += nums[i];
    }

    let mean = sum / nums.length;
    return mean;
}
function findMode(nums) {
    let mode = {};
    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i]
        if (mode[currNum]) {
            mode[currNum]++;
        } else {
            mode[currNum] = 1;
        }
        if (count < mode[currNum]) {
            max = currNum;
            count = mode[currNum];
        }
    }
    return max;
}

function findMedian(nums) {
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;

    } else {
        median = nums[middleIndex];
    }
    return median;
}
module.exports = {
    convertStringToNumsArray,
    findMean,
    findMedian,
    findMode
};