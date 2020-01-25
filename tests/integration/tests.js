const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    // Selenium server
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should show the result of the arithmetical operations', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should allow multiple operations to be chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('should show expected output for very large numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('997002999')
  })

});
