var reverse = function(x) {
  let str = String(x)
  let rev = []
  for (let i =0; i < str.length; i++ ) {
    rev.unshift(str[i])
  }
  if (rev[str.length-1] === '-') {
    rev.unshift(rev.pop())
  }
  let a = rev.join('')
  if (Number(a) > 2147483647 || Number(a) < -2147483648) {
    return 0
  }
  return Number(a)
};

console.log(reverse(-2147483));