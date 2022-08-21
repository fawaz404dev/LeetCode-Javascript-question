// Source : https://leetcode.com/problems/pascals-triangle
// Author : Fawaz Jomah
// Date   : 2017-07-12

/***************************************************************************************
 *
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * For example, given numRows = 5,
 * Return
 *
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 *
 *
 ***************************************************************************************/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []

    for (let row, prevRow, i = 0; i < numRows; ++i) {
        [row, prevRow] = [[1], result[i - 1] || []]
        prevRow.forEach((n, j) => row.push(n + (prevRow[j + 1] || 0)))
        result.push(row)
    }
    return result
};


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []

    for (let row = [], i = 0; i < numRows; ++i) {
        row.push(1)
        for (let j = i - 1; j > 0; --j) {
            row[j] = row[j - 1] + row[j]
        }
        result.push(row.slice())
    }
    return result
};
