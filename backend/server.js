const UserService = require("./service/UserService.js");
const EventService = require("./service/EventService");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({
    origin: "http://localhost:5500"
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = 5501;

app.post("/login", async (req, res) => {
    let result = await UserService.userLogin(req.body);
    res.send(JSON.stringify(result));
});

app.post("/register", async (req, res) => {
    try {
        await UserService.userRegistration(req.body);
        res.send(JSON.stringify({status:"success", message:"Registered successfully..."}));
    } catch(error) {
        res.send(JSON.stringify({status:"error", message:"An error occurred!!!"}));
    }
});

app.get("/roles", async (req, res) => {
    let result = await UserService.getRoles();
    res.send(JSON.stringify(result));
});

app.get("/suggested-partners", async (req, res) => {
    let result = await UserService.getSuggestedPartners();
    res.send(JSON.stringify(result));
});

app.get("/partner/:id", async (req, res) => {
    let result = await UserService.getPartnerById(req.params.id);
    res.send(JSON.stringify(result));
});

app.post("/book", async (req,res) => {
    try {
        await EventService.Book(req.body);
        res.send(JSON.stringify({status:"success", message:"Booked successfully..."}));
    } catch(error) {
        console.log(error);
        res.send(JSON.stringify({status:"error", message:"An error occurred!!!"}));
    }
});

app.get("/pending-events/:id", async (req, res) => {
    let result = await EventService.getPendingEvents(req.params.id);
    res.send(JSON.stringify(result));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});