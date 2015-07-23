var cp = require('child_process');
var should = require('chai').should;

describe('CLI', function () {
  it('should thank me for downloading', function (done) {
    console.log('childprocess');
    cp.execFile('./app.js', function (err, stdout) {
      stdout.should.equal('Thanks for downloading my app!\n');
      done();
    })
    //execute node app.js
    //check the output ""
  })
})
