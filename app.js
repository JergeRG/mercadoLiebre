const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || port, () => {
    console.log("Server running on port " + port);
});

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

 app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});