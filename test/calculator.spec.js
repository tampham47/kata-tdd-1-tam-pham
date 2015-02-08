'use strict'

describe('calculator', function(){
  function checkResult(express, value) {
    it('should evaluate ' + express + ' to ' + value, function(){
      expect(calculator.add(express)).toEqual(value);
    });
  }

  checkResult('', 0);
  checkResult('1', 1);
  checkResult('1,2', 3);

});

