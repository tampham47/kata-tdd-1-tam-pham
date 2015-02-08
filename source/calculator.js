'use strict'

var calculator = {
  add: function(nums) {
    var pices = this.split(nums);

    return this.calculatorSum(pices);
  },

  getCustomDelimiters: function(express){
    var delimiters = []
    if (express.indexOf('//') === 0)
      delimiters.push(express.charAt(2));
    return delimiters;
  },

  replaceToCommas: function(express, delimiters){
    for (var i=0; i<delimiters.length; i++){
      while (express.indexOf(delimiters[i]) >= 0)
      {
        express = express.replace(delimiters[i], ',');
      }
    }
    return express;
  },

  split: function(express){
    var delimiters = this.getCustomDelimiters(express);

    if (delimiters.length > 0)
      express = this.replaceToCommas(express.substring(4), delimiters);

    return express.split(/[\n,]+/);
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
