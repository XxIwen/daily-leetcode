/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  return Math.max(robRang(nums, 1, nums.length - 1), robRang(nums, 0, nums.length - 2));
};

var robRang = function (nums, start, end) {
  var first = nums[start];
  var second = Math.max(nums[start], nums[start + 1]);
  for (var i = start + 2; i <= end; i++) {
    var temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }

  return second;
};
