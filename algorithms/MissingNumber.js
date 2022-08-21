// Source : https://leetcode.com/problems/missing-number
// Author : Fawaz Jomah
// Date   : 2017-09-06

/***************************************************************************************
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the
 * one that is missing from the array.
 *
 * For example,
 * Given nums = [0, 1, 3] return 2.
 *
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement it using
 * only constant extra space complexity?
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating
 * all test cases.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length + 1) / 2
    return nums.reduce((sum, num) => sum -= num, sum)
};
