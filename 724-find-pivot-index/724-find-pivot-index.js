/**
 * @param {number[]} nums
 * @return {number}
 */

function sumArray(list) {
    let sum = 0
    for (const num of list) {
        sum += num
    }
    return sum
}

var pivotIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        
        if (
            sumArray(nums.slice(0, i)) === sumArray(nums.slice(i + 1))
        ) return i
    }
    
    return -1
    
};