const express = require("express");

const app = express();
const port = 800;

app.get("/", (req, res)=>{
    res.send("This is home page for my first express app with shakil");

});

app.get("/about", (req, res)=>{
     res.send("This is about page for my first express app with shakil");

 });

 app.get("/this", (req, res)=>{
    res.send("This page is not found on my webside");

});

 app.post("/about", (req, res)=>{
    res.send("This is post request about page for my first express app with shakil");

});

app.listen(port, ()=>{
    console.log(`This application startet succesfully onport ${port}`);
});