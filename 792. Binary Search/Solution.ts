function search(nums: number[], target: number, acc: number = 0): number {
    let startIndex = 0;

    let endIndex = nums.length -1;

    while (startIndex < endIndex) {
        const middle = Math.floor((endIndex - startIndex) / 2) + startIndex

        if (nums[middle] == target) return middle

        if (nums[middle] < target) {
            startIndex = middle + 1
        } else {
            endIndex = middle - 1
        }
    }

    return nums[startIndex] == target ? startIndex : -1
};