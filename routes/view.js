module.exports = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/sign-up");
  });

  app.get("/sign-up", (req, res) => {
    res.sendFile("signup.html", { root: "./views" });
  });

  app.get("/*", (req, res) => {
    res.sendFile("pageNotFound.html", { root: "./views" });
  });
  
};
