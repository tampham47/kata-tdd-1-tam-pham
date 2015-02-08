'use strict'

var calculator = {
  add: function(nums) {
    var pices = nums.split(/[\n,]+/);

    return this.calculatorSum(pices);
  },

  calculatorSum: function(pices){
    var result = 0;
    for (var i=0; i<pices.length; i++) {
      if (!isNaN(parseInt(pices[i] || 0)))
        result += parseInt(pices[i] || 0);
    }

    return result;
  }
};
