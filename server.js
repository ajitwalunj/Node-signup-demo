const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
require("./routes/index")(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

module.exports = app;
