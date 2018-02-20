var MongoClient = require('mongodb').MongoClient;

//Connect to the db
var url = "mongodb://localhost:27017/mydb";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    //Write databse Insert/Update/Query code here..
    console.log("Ddadtabse create!");
    db.close();
});