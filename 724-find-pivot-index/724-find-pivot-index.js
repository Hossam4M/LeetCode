/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    
    let total = 0
    
    for (const num of nums) {
        total += num
    }
    
    let compare = 0
    
    for (let i = 0; i < nums.length; i++) {
        
        total -= nums[i]
        
        if (total === 0 && i === 0 ) return i;
        
        if (total === compare) return i;
        
        compare += nums[i]
    }
    
    return -1
    
};