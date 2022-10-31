var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s
  }
  let a = [[s[0]]];
  let b = 0;
  let c = 1;
  for (let i = 1; i < numRows; i++) {
    a.push([]);
  }
  for (let i = 1; i < s.length; i++) {
    b = b + c;
    a[b].push(s[i]);
    if (b === 0) {
      c = 1;
    }
    if (b === numRows - 1) {
      c = -1;
    }
  }
  let string = []
  for (let i = 0; i < numRows; i++) {
    for (let element of a[i]) {
      string.push(element)
    }
  }
  let d = [...string].join('')
  return(d)
};

console.log(convert("PAYPALISHIRING", 4));