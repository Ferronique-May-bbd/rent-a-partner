const UserService = require("./UserService.js");
//import UserService from "./UserService.js";

const express = require("express");
const path = require("path");

const app = express();
const port = 5501;

app.post("/login", (req, res) => {
    let result = await UserService.userLogin(req.body);
    res.send(JSON.stringify(result));
});

app.post("/login", (req, res) => {
    let result = await UserService.user(req.body);
    res.send(JSON.stringify(result));
});

app.get("/roles", async (req, res) => {
    let result = await UserService.getRoles();
    res.send(JSON.stringify(result));
});

app.get("/suggested-partners", async (req, res) => {
    let result = await UserService.getSuggestedPartners();
    res.send(JSON.stringify(result));
});

app.get("/suggested-partners/:genderPreference/:race/:age/:height", async (req, res) => {
    // console.log(`gender: ${genderPreference}`);
    // console.log(`race: ${race}`);
    // console.log(`age: ${age}`);
    // console.log(`height: ${height}`);
    let result = await UserService.getSuggestedPartners();
    // res.send(JSON.stringify(result));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});