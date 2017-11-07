var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('posts-index', function() {
  it('should have a live home page', function (done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function (err, res){
        res.status.should.be.equal(200);
        done();
      });
  });
});
describe('')