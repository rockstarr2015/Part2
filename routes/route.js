var express = require('epxress');
var router = express.Router();

router.get("/",(req,res)=>{
	res.send("Hello world...");
});

module.exports = router;