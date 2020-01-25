var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add 2 numbers', function(){
    calculator.previousTotal = "1"
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  })

  it('can subtract 2 numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(3.0, calculator.runningTotal)
  })

});
