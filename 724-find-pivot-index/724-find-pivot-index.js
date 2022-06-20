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
    
    let total = sumArray(nums);
    
    let compare = 0
    
    for (let i = 0; i < nums.length; i++) {
        
        total -= nums[i]
        
        if (total === 0 && i === 0 ) return i;
        
        if (total === compare) return i;
        
        compare += nums[i]
    }
    
    return -1
    
};