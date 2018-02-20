// In MongoDB we use the find and findOne methods to find data in a collection.
// Just like the SELECT statement is used to find data in a table in a MySQL database.

// To select data from a collection in MongoDB, we can use the findOne() method.
// The findOne() method returns the first occurrence in the selection.

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});