function hammingWeight(n: number): number {
    const binary = n.toString(2)
    let result = 0

    for (const bit of binary) {
        if (bit == '1') result++
    }

    return result
};