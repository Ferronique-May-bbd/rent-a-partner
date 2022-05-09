const express = require("express");
const path = require("path");

const port = 5500;

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "client", "static")));

app.get("/*", (request, response) => {
    response.sendFile(path.resolve("client", "index.html"));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});