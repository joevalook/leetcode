var isPalindrome = function(x) {
    let a = String(x)
    for (let i = 0; i< a.length; i++ ) {
      if (a[i] !== a[a.length-1-i]) {
        return false
      }
    }
    return true;
};

console.log(isPalindrome(1221));