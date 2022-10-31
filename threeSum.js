var threeSum = function (nums) {
  let a = [];
  let check = 0;
  if (nums.length < 3) {
    return ([]);
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return a;
    }
    let start = i + 1
    let end = nums.length-1
    while(start<end) {
    if (nums[i] + nums[start] + nums[end] === 0) {
      let answer = [nums[i],nums[start],nums[end]].sort();
      for (let element of a) {
        check = 0;
        if (element[0] === answer[0] && element[1] === answer[1] && element[2] === answer[2]) {
          check = 1;
          break;
        }
      }
      if (check === 0) {
        a.push(answer);
      }
      start +=1
      end -= 1
    }
    else if (nums[i] + nums[start] + nums[end] < 0) {
      start +=1
    }
    else if (nums[i] + nums[start] + nums[end] > 0) {
      end -=1;
    }
  }
}
  return a;
};