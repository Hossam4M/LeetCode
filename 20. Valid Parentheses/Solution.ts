function isLeft(char: string) {
    return char == '{' || char == '(' || char == '['
}

function getRightSideForLeft(char: string) {
    switch(char) {
        case '{':
            return '}'
        case '(':
            return ')'
        case '[':
            return ']'
        default:
            break;
    }
}

function isValid(str: string): boolean {
    const leftStack: string[] = []

    for (const char of str) {
        if (isLeft(char)) {
            leftStack.push(char)
        } else {
            const lastChar = leftStack[leftStack.length - 1];

            if (getRightSideForLeft(lastChar) != char) return false;

            leftStack.pop()
        }
    }

    return !leftStack.length
};