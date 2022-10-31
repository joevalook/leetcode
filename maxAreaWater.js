var maxArea = function (height) {
  let a = 0;
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] * (height.length - 1 - i) > a) {
      for (let j = i + 1; j < height.length; j++) {
        let h = Math.min(height[i], height[j]);
        let l = j - i;
        if (h * l > a) {
          a = h * l;
        }
      }
    }
  }
  return a;
};