var thanks = require(path.join(process.cwd(), '/lib/thanks'));
var path = require('path');
var should = require("chai").should();

describe('Thanks', function () {
  it('should thank me for downloading', function () {
    thanks.should.equal('Thanks for downloading my app!');
  });
});
