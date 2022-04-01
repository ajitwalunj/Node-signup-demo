const validateRequest = require("../utils/requestValidation");

module.exports = (app) => {
  app.post("/api/sign-up", [validateRequest], async (req, res) => {
    try {
      const reqData = req.body;
      const resMessage = `Hello ${reqData.firstname} ${
        reqData.lastname
      }, Thank you for signing up. Your account is now created.${
        reqData.subscribe_to_newsletter
          ? ` You would be receiving our periodic newsletters to your email: ${reqData.email}`
          : ""
      }`;
      res.send({ message: resMessage });
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
