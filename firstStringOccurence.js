var strStr = function (haystack, needle) {
  let counter = 0;
  let i = 0;
  let c = -1;
  while (i < haystack.length) {
    let a = haystack[i];
    let b = needle[counter];
    if (haystack[i] === needle[counter]) {
      if (counter === needle.length - 1) {
        return (i - counter);
      }
      else {
        if (counter === 0) {
          c = i;
        }
        counter += 1;
        i += 1;
      }
    }
    else {
      counter = 0;
      if (c >= 0) {
        i = c + 1;
        c = -1;
      }
      else {
        i += 1;
      }
    }
  }
  return -1;
};