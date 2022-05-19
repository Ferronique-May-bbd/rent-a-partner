const express = require("express");
const path = require("path");

const app = express();
const port = 5500;

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("pages/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("pages/register.html"));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});