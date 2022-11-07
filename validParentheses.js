var isValid = function (s) {
  let a = [];
  for (let element of s) {
    if (element === '{' || element === '(' || element === '[') {
      a.push(element);
    }
    if (element === '}') {
      if (a[a.length - 1] === '{') {
        a.pop();
      }
      else {
        return false;
      }
    }
    if (element === ')') {
      if (a[a.length - 1] === '(') {
        a.pop();
      }
      else {
        return false;
      }
    }
    if (element === ']') {
      if (a[a.length - 1] === '[') {
        a.pop();
      }
      else {
        return false;
      }
    }
  }
  if (a.length === 0) {
    return true
  }
};