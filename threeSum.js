var threeSum = function(nums) {
  let a = []
  let zeros = 0
    for (let i =0; i< nums.length-2; i++) {
      for (let j = i+1; j<nums.length - 1; j++){
        for (let k = j+1; k < nums.length; k++) {
          if (nums[i] +nums[j] +nums[k] === 0) {
            if (nums [i] === 0 && nums[j] === 0 && nums[k] === 0 && zeros === 0) {
              a.push([nums[i], nums[j], nums[k]]) 
              zeros = 1
            }
            else if (a.length === 0) {
              a.push([nums[i], nums[j], nums[k]])
            }

            else {
              let check = 0
              for (let element of a) {
                if (element.includes(nums[i]) && element.includes(nums[j]) && element.includes(nums[k])) {
                  break;
                }
                else {
                  check += 1
                }
              }
              if (check === a.length) {
                a.push([nums[i], nums[j], nums[k]])
              }

            }
          }
        }
      }
    }
    return a
};