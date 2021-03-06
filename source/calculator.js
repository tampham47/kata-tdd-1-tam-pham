
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
    var delimiters = [],
      delimiter = '';
    if (express.indexOf('//[') === 0)
    { // delimiter can be of any length
      // remove a couple of slash
      express = express.substring(2);
      while (express.indexOf('[') >= 0){
        delimiter = express.substring(1, express.indexOf(']'));
        // remove the first delimiter
        express = express.substring(express.indexOf(']') + 1);
        delimiters.push(delimiter);
      }
    } else if (express.indexOf('//') === 0)
    { // delimiter with 1 char
      delimiters.push(express.charAt(2));
    }
    return delimiters;
  },

  // replace all custom delimiter to commas
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
      // create new express with only commas
      express = this.replaceToCommas(pExpress, delimiters);
    }

    // split with only commas and 'new line'
    return express.split(/[\n,]+/);
  },

  calculatorSum: function(pices){
    var result = 0,
      num = 0;

    for (var i=0; i<pices.length; i++) {
      if (!isNaN(parseInt(pices[i] || 0))){
        num = parseInt(pices[i] || 0);
        if ((num <= 1000))
          result += num;
      }
    }

    return result;
  }
};
