const express = require('express');
const port = 8080;
const app = express();


let router = require("./route.js");
app.use('/', router);


const fs = require('fs');
const readline = require('readline');
const stream = require('stream');


app.listen(port, (err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("server is listening on port: "+port);
	}
})