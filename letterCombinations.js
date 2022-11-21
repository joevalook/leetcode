var letterCombinations = function (digits) {
  let ans = [];
  let a = [0, 0, ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  if (digits.length ===0){
      return ans
  }
  for (let letter1 of a[parseInt(digits[0])]) {
    if (digits.length > 1) {
      for (let letter2 of a[parseInt(digits[1])]) {
        if (digits.length > 2) {
          for (let letter3 of a[parseInt(digits[2])]) {
            if (digits.length > 3) {
              for (let letter4 of a[parseInt(digits[3])]) {
                ans.push([letter1,letter2, letter3, letter4].join(''));
              }
            }
            else {
              ans.push([letter1,letter2, letter3].join(''));
            }
          }
        }
        else {
          ans.push([letter1,letter2].join(''))
        }
      }
    }
    else {
      ans.push(letter1)
    }
  }
  return ans
};
