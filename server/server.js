const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))



app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);


// app.get("/", (req, res) => {
//     res.send("Hello from the web server side...")
// });