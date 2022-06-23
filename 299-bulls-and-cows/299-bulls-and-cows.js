/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
        
    let possibleCowsList = {}
    
    for (i = 0; i < guess.length; i++) {
        possibleCowsList[guess[i]] = (possibleCowsList[guess[i]] || 0) + 1
    }
    
    for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
            if (possibleCowsList[secret[i]] < 1) cows--;
            possibleCowsList[secret[i]] = possibleCowsList[secret[i]] - 1;
        } else if (possibleCowsList[secret[i]]) {
            if (possibleCowsList[secret[i]] > 0) cows++;
            possibleCowsList[secret[i]] = possibleCowsList[secret[i]] - 1;
        }
    }
        
    return `${bulls}A${cows}B`
};