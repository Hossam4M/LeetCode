function getAdjacent(image: number[][], sr: number, sc: number) {
    const adjacent = [];

    const row = image[sr]

    if (sc > 0) adjacent.push([sr, sc - 1])
    if (sc < row.length - 1) adjacent.push([sr, sc + 1])

    const column = image.map(row => row[sc])

    if (sr > 0) adjacent.push([sr - 1, sc])
    if (sr < column.length - 1) adjacent.push([sr + 1, sc])

    return adjacent
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialColor = image[sr][sc]

    if (initialColor == color) return image;

    image[sr][sc] = color

    const adjacent = getAdjacent(image, sr, sc)

    for (const [r, c] of adjacent) {
        if (image[r][c] != initialColor) continue;

        image = floodFill(image, r, c, color)
    }

    return image
};