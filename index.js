const express = require('express');
const port = 8080;
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();

app.use(bodyParser.json());
app.use(upload.array());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "pug");
app.set("views", "./views");


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