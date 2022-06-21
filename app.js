const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./router/route");



app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(userRouter);


//for only view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/public/views");



app.listen(4000,()=>{
    console.log("http://localhost:4000/login")
})

