'use strict'

var split = function(strNums){
  return strNums.split(',');
};

exports.add = function(strNums){
  var
    listNumber = split(strNums),
    result = 0;

  for (var i=0; i<listNumber.length; i++){
    if (!isNaN(parseInt(listNumber[i])))
      result += parseInt(listNumber[i]);
  }

  return result;
};
