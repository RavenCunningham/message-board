const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

// static assets in /public
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

// views in /views using EJS
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use((error, request, response, next) => {
  console.log(error);
  response.status(error.statusCode || 500).send(error.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }
  console.log(`message board app is running, listening on port ${PORT}`);
});