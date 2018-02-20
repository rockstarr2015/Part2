const express = require('express');
const port = 8080;
const app = express();



let router = require("./route.js");

app.use('/', router);


app.listen(port, (err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("server is listening on port: "+port);
	}
})