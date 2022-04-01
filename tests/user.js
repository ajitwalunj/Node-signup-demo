// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("User", () => {
  // Test to sign up the user
  it("should perform user sign up", (done) => {
    const payload = {
      firstname: "Ajit",
      lastname: "Walunj",
      email: "hfjygj@gmail.com",
      password: "jvkuyvkyugyd",
      subscribe_to_newsletter: true,
    };
    chai
      .request(app)
      .post("/api/sign-up")
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        done();
      });
  });
});
