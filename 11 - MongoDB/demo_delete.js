// Note: If the query finds more than one document, only the first occurrence is deleted.

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function (err, odj) {
        if (err) throw err;
        console.log("1 document deleted!");
        db.close();
    });
});