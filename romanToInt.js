var romanToInt = function (s) {
  let a = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      if (s[i + 1] === 'V') {
        a += 4
        i += 1
      }
      else if (s[i + 1] === 'X') {
        a += 9
        i += 1
      }
      else {
        a += 1
      }
    }
    else if (s[i] === 'X') {
      if (s[i + 1] === 'L') {
        a += 40
        i += 1
      }
      else if (s[i + 1] === 'C') {
        a += 90
        i += 1
      }
      else {
        a += 10
      }

    }
    else if (s[i] === 'C') {
      if (s[i + 1] === 'D') {
        a += 400
        i += 1
      }
      else if (s[i + 1] === 'M') {
        a += 900
        i += 1
      }
      else {
        a += 100
      }

    }
    else if (s[i] === 'V') {
      a += 5
    }
    else if (s[i] === 'L') {
      a += 50
    }
    else if (s[i] === 'D') {
      a += 500
    }
    else if (s[i] === 'M') {
      a += 1000
    }
  }
  return a
};