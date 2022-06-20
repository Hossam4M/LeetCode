/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapStoT = {};
    const mapTtoS = {};
    
    for (const i in s) {
        if (!mapStoT[s[i]]) {
            mapStoT[s[i]] = t[i];
            if (!mapTtoS[t[i]]) { mapTtoS[t[i]] = s[i]}
        };
        
        if (mapStoT[s[i]] === t[i] && mapTtoS[t[i]] === s[i]) continue;
        
        return false
    }
    
    return true
};