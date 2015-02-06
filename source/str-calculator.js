'use strict'

// replace all custom delimiter to commas
var prepare = function(nums){
  if (nums.indexOf('//') == 0)
  {
    var delimiter = nums[2];
    var newNums = nums.substr(4, nums.length);
    // replace all
    while (newNums.indexOf(delimiter)>=0)
    {
      newNums = newNums.replace(delimiter, ',');
    }
    return newNums;
  }
  else
    return nums;
};

// split nums into arr
var split = function(nums){
  var pNums = prepare(nums);
  // split with commas and new line
  return pNums.split(/[,\n]+/);
};

// public functions
exports.add = function(nums){
  var
    listNumber = split(nums),
    result = 0;

  for (var i=0; i<listNumber.length; i++){
    if (!isNaN(parseInt(listNumber[i])))
      result += parseInt(listNumber[i]);
  }

  return result;
};
