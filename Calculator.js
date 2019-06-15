const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));




//simple calculator
app.get("/calculator", function(req,res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is "+ result);
});

//BMI Calculator 

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/", function(req,res){
    
    var Height = Number(req.body.Height);
    var Weight = Number(req.body.Weight);
    var result = Height*(Weight^2);

    res.send("Your BMI is "+ result);
});

app.listen (3000, function(){
    console.log("Server started on port 3000");
});