function isPalindrome(str: string): boolean {
    const strAlphaNumeric = str.replace(/[^0-9a-z]/gi, '').toLowerCase()

    return strAlphaNumeric.split('').reverse().join('') === strAlphaNumeric
};