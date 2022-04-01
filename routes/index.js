const indexRoutes = (app) => {
  require("./user")(app);
  require("./view")(app);
};

module.exports = indexRoutes;
