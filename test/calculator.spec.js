
describe('calculator', function(){
  function checkResult(express, value) {
    it('should evaluate "' + express.replace(/\n/g, '\\n') + '" to ' + value, function(){
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
    checkResult('1\n2\n5', 8);
  });

  describe('different delimiters', function(){
    checkResult('//;\n1;2', 3);
    checkResult('//;\n1;2;3', 6);
  });

  describe('negative numbers are not allowed', function(){
    var caugh = null;
    it('single negative numbers', function(){
      try {
        calculator.add('-1;5');
      }
      catch(err){
        caugh = err;
      }
      expect(caugh.indexOf('-1')).toEqual(-1);
    });

    it('multi negative numbers', function(){
      try {
        calculator.add('//;\n-1;-2;5');
      }
      catch(err){
        caugh = err;
      }
      expect(caugh.indexOf('-1')).not.toEqual(-1);
    });
  });

  describe('Numbers bigger than 1000', function(){
    checkResult('//|\n1001|5', 5);
  });

  describe('Delimiters can be of any length with the following format', function(){
    checkResult('//[***]\n1001***1***2***3', 6);
    checkResult('//[#@]\n1001#@1#@2#@3', 6);
  });
});

