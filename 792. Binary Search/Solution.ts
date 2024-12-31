function search(nums: number[], target: number, acc: number = 0): number {
    if (!nums.length) return -1;

    const middleIndex = Math.floor(nums.length / 2)

    // if (!middleIndex && nums[middleIndex] != target) return -1;
 
    if (nums[middleIndex] == target) return acc + middleIndex

    if (nums[middleIndex] < target) return search(nums.slice(middleIndex + 1), target, acc + 1 + middleIndex)

    return search(nums.slice(0, middleIndex), target, acc)
};