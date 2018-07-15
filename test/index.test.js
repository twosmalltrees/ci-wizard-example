const chai = require('chai');
const expect = chai.expect;

describe('A passing test', function () {
  it('should pass', function () {
    expect(true).to.be.true;
  });
});

describe('A second passing test', function () {
  it('should also pass', function () {
    expect(true).to.be.true;
  });
});
