require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PROT = 5002 || process.env.PORT;

app.use(express.static("public"));

//Templating Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.use("/", require("./server/routers/main"));

app.listen(PROT, () => {
  console.log(`Server is running on port ${PROT}`);
});
