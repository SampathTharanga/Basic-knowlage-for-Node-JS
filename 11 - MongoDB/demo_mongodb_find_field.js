// The second parameter of the find() method is an object describing which fields to include in the result.
//This parameter is optional, and if omitted, all fields will be included in the result.

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo= db.db("mongodb");
    dbo.collection("customers").find({}, {_id: 0, name: 1, address: 1}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});