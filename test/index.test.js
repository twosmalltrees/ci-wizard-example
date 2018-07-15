const chai = require('chai');
const expect = chai.expect;

describe('A failing test', function () {
  it('should fail', function () {
    expect(true).to.be.false;
  });
});
