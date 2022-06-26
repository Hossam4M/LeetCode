function reverse(x: number): number {
    if (!x) return 0
    const sign = x / Math.abs(x);
    const result = sign * Number(String(Math.abs(x)).split('').reverse().join(''))
    
    return Math.abs(result) >= Math.pow(2, 31) ? 0 : result
};