var removeDuplicates = function(nums) {
  let a= nums[0]
    for (let i =1; i< nums.length; i++) {
      if (nums[i] === a) {
        nums[i] = '_'
      }
      else {
        a = nums[i]
      }
    } 
  return nums.sort()
};

console.log(removeDuplicates([1,1,2]))

