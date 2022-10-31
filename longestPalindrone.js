var longestPalindrome = function (s) {
  s.split('');
  let palindrome = [];
  for (let i = 1; i < s.length; i++) {
    let a = [s[i]];
    for (let j = 1; i + j <= s.length && i - j >= -1; j++) {
      if (s[i + j] === s[i - j] && i + j < s.length && i - j > -1) {
        a.push(s[i + j]);
        a.unshift(s[i - j]);
      }
      else {
        palindrome.push([...a].join(''));
        break;
      }
    }
    if (s[i] === s[i-1]) {
      a = [s[i-1], s[i]]
      for (let j = 1; i + j <= s.length && i - j >= 0; j++) {
        if (s[i + j] === s[i - j - 1] && i + j < s.length && i - j > 0) {
          a.push(s[i + j]);
          a.unshift(s[i - j-1]);
        }
        else {
          palindrome.push([...a].join(''));
          break;
        }
      }
    }
  }
  let longest = '';
  for (let element of palindrome) {
    if (element.length > longest.length) {
      longest = element;
    }
  }
  return longest;
};

console.log(longestPalindrome('bb'));