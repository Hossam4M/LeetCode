/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const map = {}
    
    for (const i in nums) {
        if (map[target - nums[i]]) return [map[target - nums[i]], i]
        
        map[nums[i]] = i
    }
    
};