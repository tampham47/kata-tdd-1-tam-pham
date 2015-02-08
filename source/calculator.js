'use strict'

var calculator = {
  add: function(nums) {
    var
      pices = nums.split(','),
      result = 0;

    for (var i=0; i<pices.length; i++) {
      result += parseInt(pices[i] || 0);
    }

    return result;
  }
};
