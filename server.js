var swig = require('swig');
//import express package and save it in the express variable;   
var express = require('express');   
//create a new instance of express and save it in a variable called app;   
var app = express();   
    
//save the port globally   
var port = 8080;   
   
//we need now to define routes for our web server   
//first any requests that comes to the root serve this function   
//note that this is an asynchronous code   
//note that a call back function has been passed which receives two variables   
//req which contains client request information   
//res which is the response we will send to the client 
 app.get('/', function(req, res){   
     //read the html page  
      var template = swig.compileFile(__dirname + '/public/html/index.html');  
       //apply any template variables, currently we have none   
       var output = template({});   
           
       //send the output to client   
       res.send(output)   
 });   
    
//now run the server  at port 8080   
app.listen(port);  