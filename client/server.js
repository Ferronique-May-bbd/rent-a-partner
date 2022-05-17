const express = require("express");
const path = require("path");
const cors = require("cors");


const app = express();
const port = 5500;

app.use(cors());

app.use("/static", express.static(path.resolve(__dirname, "client", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("client", "index.html"));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});