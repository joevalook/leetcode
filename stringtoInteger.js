var myAtoi = function (s) {
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === '-' || s[i] === '+') && a.length === 0) {
      a.push(s[i]);
    }
    else if ((s[i] === ' ') && a.length === 0) {

    }
    else if (('0123456789').includes(s[i])) {
      a.push(s[i]);
    }
    else {
      let b = a.join('');
      if (Number(b) > 2147483647) {
        return (2147483647);
      }
      if (Number(b) < -2147483648) {
        return (-2147483648);
      }
      if (!Number(b)) {
        return 0
      }
      return (Number(b))
    }
  }
  let b = a.join('');
  if (Number(b) > 2147483647) {
    return (2147483647);
  }
  if (Number(b) < -2147483648) {
    return (-2147483648);
  }
  if (!Number(b)) {
    return 0
  }
  return (Number(b))
};

console.log(myAtoi("    -42"))