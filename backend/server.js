const UserService = require("./service/UserService.js");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({
    origin: "http://localhost:5500"
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use

const port = 5501;

app.post("/login", async (req, res) => {
    let result = await UserService.userLogin(req.body);
    res.send(JSON.stringify(result));
});

app.post("/register", async (req, res) => {
    let result = await UserService.userRegistration(req.body);
    res.send(JSON.stringify(result));
});

app.get("/roles", async (req, res) => {
    let result = await UserService.getRoles();
    res.send(JSON.stringify(result));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});