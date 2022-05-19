const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 5500;

app.use(cors());

app.use(express.static('./static/'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('', 'home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve('', 'home.html'));
});

app.get('/login', async(req, res) => {
    res.sendFile(path.resolve('', 'login.html'))
});

app.get('/register', async(req, res) => {
    res.sendFile(path.resolve('', 'register.html'))
});

app.get('/packages', async(req, res) => {
    res.sendFile(path.resolve('', 'packages.html'))
});

app.get('/browse-partners', async(req, res) => {
    res.sendFile(path.resolve('', 'browse-partners.html'))
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});