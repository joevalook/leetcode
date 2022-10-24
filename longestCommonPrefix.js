var longestCommonPrefix = function(strs) {
    let a = ''
    for (let i = 0; i < strs[0].length; i++) {
      for (let words of strs) {
        if (words[i] !== strs[0][i]) {
          return a
        }
      }
      a += strs[0][i]
    }
    return a;
};