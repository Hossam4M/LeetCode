function plusOne(digits: number[]): number[] {
    if (!digits.length) return [1];
    
    const lastElement = digits.pop()
    
    if (lastElement + 1 < 10) {
        digits.push(lastElement + 1)
        return digits
    }
    
    return [...plusOne(digits), 0]
    
};