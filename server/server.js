const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { nextTick } = require("process");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sub-form", (req, res) => {
  let sub = JSON.stringify({ name: req.body.name, email: req.body.email });
  fs.appendFileSync("subs.json", `${sub}\n`);
  res.send("Thank you");
});

app.get("/formsubmissions", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../subs.json"),
    { encoding: "UTF-8" },
    (err, data) => {
      if (err) console.log(err);
      res.send(data);
    }
  );
});

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("Hello from the web server side...")
// });
