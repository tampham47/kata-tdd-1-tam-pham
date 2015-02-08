'use strict'

describe('calculator', function(){
  function checkResult(express, value) {
    it('should evaluate "' + express + '" to ' + value, function(){
      expect(calculator.add(express)).toEqual(value);
    });
  }

  describe('add method', function(){
    checkResult('', 0);
    checkResult('1', 1);
    checkResult('1,2', 3);
  });

  describe('unknown amount', function(){
    checkResult('1,2,k', 3);
  });

  describe('new lines', function(){
    checkResult('1\n2', 3);
    checkResult('1,2\n5', 8);
  })

});

