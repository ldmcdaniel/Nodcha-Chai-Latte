var should = require("chai").should();

//This test tests to see if testing is working
//That is all this test does
describe('Mocha + Chai', function() {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

//describe blocks group your testing together
// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       // assert.equal(-1, [1,2,3].indexOf(5));
//       [1,2,3].indexOf(5).should.equal(-1);
//       // assert.equal(-1, [1,2,3].indexOf(0));
//       [1,2,3].indexOf(0).should.equal(-1);
//     });
//   });
// });
