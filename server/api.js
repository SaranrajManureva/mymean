var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').objectId;

/*

 var url = 'mongodb://localhost:27017'; // remove the db name.
    MongoClient.connect(url, (err, client) => {
       var db = client.db('easy-auth');
       db.collection('users').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc);
        });

        // Close the DB
        client.close();
        });

    }); 



 */
 
const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
		if(err) console.log(err);
		var db = client.db('mean');
		closure(db); 
	});
};


const sendError = (err,res) =>{
	response.status = 501;
	response.message = typeof err == 'object' ? err.message : err;
	res.status(501).json(response)
}



const response =  {
	status: 200,
	data: [],
	message: null
}

router.get('/users', (req,res) => {
	console.log('dddd')
//	console.log(db)
	connection((db)=>{
		db.collection('users').find().toArray().then((users) => {
			response.data =users; 
			console.log(users)
			res.json(response)
		}).catch((err)=> {
			sendError(err,res);
		})
	});
});

module.exports = router
