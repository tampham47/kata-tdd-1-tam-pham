'use strict'

var calculator = {
  add: function(nums) {
    var pices = this.split(nums);

    this.checkValidity(pices);
    return this.calculatorSum(pices);
  },

  checkValidity: function(pices){
    var
      negatives = [],
      num = 0;

    for (var i=0; i<pices.length; i++){
      if (!isNaN(parseInt(pices[i] || 0))){
        num = parseInt(pices[i]);
        if (num < 0)
          negatives.push(num);
      }
    }

    if (negatives.length > 0)
    {
      if (negatives.length === 1)
        throw 'negatives not allowed.';
      else
        throw 'negatives not allowed. ' + negatives.join(', ');
    }
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
    var
      // get custom delimiter
      delimiters = this.getCustomDelimiters(express),
      // return a string without the first line
      pExpress = '';

    if (delimiters.length > 0){
      pExpress = express.substring(express.indexOf('\n') + 1);
      express = this.replaceToCommas(pExpress, delimiters);
    }

    return express.split(/[\n,]+/);
  },

  calculatorSum: function(pices){
    var result = 0,
      num = 0;

    for (var i=0; i<pices.length; i++) {
      if (!isNaN(parseInt(pices[i] || 0))){
        num = parseInt(pices[i] || 0)
        if (!(num > 1000))
          result += num;
      }
    }

    return result;
  }
};
