 var express = require('express');
 var router = express.Router();
 
 router.get('/login', function(req, res) {
 	return res.json(
 		{
 			firstName: 'Son', 
 			lastName: 'Goku', 
 			category: 'Black Signature', 
 			points: '200000'
 		}
 	)	    
  });

 module.exports.router = router;
