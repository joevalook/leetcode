var generateParenthesis = function(n) {
  let solution = []

  const recursiveFcn = (leftBrackets, rightBrackets, str) => {
      if (leftBrackets > rightBrackets) return;
      if (!leftBrackets && !rightBrackets) solution.push(str)
      if (leftBrackets > 0) {
          recursiveFcn(leftBrackets -1, rightBrackets, str +'(')
      }
      if (rightBrackets > 0) {
          recursiveFcn(leftBrackets, rightBrackets -1, str +')')
      }
      
  }
  recursiveFcn(n,n,'')
  return solution
};