const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
	res.send("Welcome to the Anagram Finder API. Pleaes visit the /findAnagrams");
});

router.get('/findAnagrams/:word', (req,res)=>{
	console.log(req.params.word);
	var word = req.params.word;

	//import the directory file
	var instream = fs.createReadStream(process.argv[2]);


	res.send("success");





});



module.exports = router;