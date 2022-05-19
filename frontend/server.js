const express = require("express");
const path = require("path");

const app = express();
const port = 5500;

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('', 'pages/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve('', 'pages/home.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("pages/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("pages/register.html"));
});

app.get('/packages', async(req, res) => {
    res.sendFile(path.resolve('', 'pages/packages.html'))
});

app.get('/browse-partners', async(req, res) => {
    res.sendFile(path.resolve('', 'pages/browse-partners.html'))
});

app.get('/book-partner?*', async (req, res) => {
    res.sendFile(path.resolve('', 'pages/make-booking.html'))
});

app.get('/bookings', async (req, res) => {
    res.sendFile(path.resolve('', 'pages/booking-history.html'))
});

app.get('/event-request', async (req, res) => {
    res.sendFile(path.resolve('', 'pages/myInvites.html'))
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});