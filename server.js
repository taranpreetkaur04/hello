/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Taranpreet Kaur Student ID: 156419210  Date: 01-17-2023
*
* Online (Cyclic) URL: _______________________________________________________
*
********************************************************************************/ 

var HTTTP_PORT = process.env.PORT || 3000;
var express = require('express');

var my_app = express();

//default route
my_app.get("/", (request, resource) =>{
    resource.send("hello world");

});

my_app.listen(HTTTP_PORT);