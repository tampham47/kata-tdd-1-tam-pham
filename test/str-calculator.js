'use strict'

var expect = require('expect.js');

describe('StrCal', function(){
  var strCal = require('../source/str-calculator.js');

  it('"" should be 0', function(){
    expect(strCal.add('')).equal(0);
  });

  it('"1" should be 1', function(){
    expect(strCal.add('1')).equal(1);
  });

  it('"1,2" should be 3', function(){
    expect(strCal.add('1,2')).equal(3);
  })
});

