const express = require('express');
const router = express.Router();

const fs = require('fs');
const readline = require('readline');
const stream = require('stream');


router.get('/', (req,res)=>{
	res.status(200);
	res.render('home');
});


router.get('/findAnagrams/:word', (req,res)=>{

	
	let word = req.params.word;
	
	//import the directory file
	let start = new Date().getTime();
	let instream = fs.createReadStream('dictionary.txt');
	let end = new Date().getTime();
	let dirLoadingTime = `${end - start} ms`;

	let fileLoadTime = end - start; //in milli seconds 

	let outstream = new stream;
 	let readFileStream = readline.createInterface(instream, outstream);



 	let k = word.toLowerCase().split("");
	let line_word, key, tempLine;
	let result = [];

	let start2 = new Date().getTime();

	readFileStream.on('line', function(line){
		line_word = line.toLowerCase();

		if(line_word.length === k.length){
			
			key = true;
				
			line_word.split("").forEach(function(d){
				if(k.includes(d)){      
					//do nothing
				}
				else{
					key = false;
				}
			});

			if(key){
				
				tempLine = line_word.split("");
				
				k.forEach(function(d){
					if(tempLine.indexOf(d) > -1){
						tempLine.splice(tempLine.indexOf(d), 1);
					}
				});

				if(tempLine.length == 0){
					result.push(line_word);			
				}
			}						
		}				
	});

	readFileStream.on('close',function(){
		let end2 = new Date().getTime();
		let totalTimeAnagram = `${end2 - start2} ms`;
		let length = result.length > 1 ? result.length : 'No';
		let msg = `${length} Anagrams found for ${word} in ${totalTimeAnagram} `;	
		//console.log(result);

		let temp = {
			'anagram': result,
			'msg': msg,
			'loadingTime': {
				'directoryLoadingTime': dirLoadingTime,
				'anagramTime': totalTimeAnagram
			},
			'fileName': 'dictionary.txt'
		};
		res.status(200);
		res.send(temp);


	});


});





module.exports = router;