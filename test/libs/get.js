var assert = require('assert'),
    request = require('supertest');

module.exports = function(app, config, db, log) {

  var base = "/api/v1";

  describe("Get item by ID", function() {
    it("Endpoint exists", function(done) {
      request(app).get(base + "/schemas/000000000000000000000000.json").expect('Content-Type', /json/).expect(200).end(function(err, response) {
        if(err) {
          done(err);
        } else {
          var responseObj;

          try {
            responseObj = JSON.parse(response.text);
          } catch(err) {
            return done(err);
          }

          //assert.equal(200, responseObj.status);
          //assert.equal("000000000000000000000000", responseObj.response._id);

          done();
        }
      });
    });
  });



}
