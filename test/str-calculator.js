'use strict'

var
  expect = require('expect.js'),
  strCal = require('../source/str-calculator.js');

describe('StrCal', function(){

  // step 1
  it('"" should be 0', function(){
    expect(strCal.add('')).equal(0);
  });

  it('"1" should be 1', function(){
    expect(strCal.add('1')).equal(1);
  });

  it('"1,2" should be 3', function(){
    expect(strCal.add('1,2')).equal(3);
  })

  // step 2
  it('Unknow amount of numbers is valid', function(){
    expect(strCal.add('1,2,n')).equal(3);
  })

  it('Unknow amount of numbers is valid', function(){
    expect(strCal.add('1,2,n,23')).equal(26);
  })

  // step 3
  it('Input can contain new lines between numbers', function(){
    expect(strCal.add('1,2\n23')).equal(26);
  })

  // step 4
  it('Custom delimiters', function(){
    expect(strCal.add('//;\n1;2;23')).equal(26);
  })

  it('Input can contain new lines between numbers', function(){
    expect(strCal.add('//|\n1|2\n23')).equal(26);
  })

});

