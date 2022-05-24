const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});


app.listen(PORT, function () {
    console.log(`servidor corriendo en puerto
${PORT}`)
});