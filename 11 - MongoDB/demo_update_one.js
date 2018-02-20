// You can update a record, or document as it is called in MongoDB, by using the updateOne() method.
// The first parameter of the updateOne() method is a query object defining which document to update.
// Note: If the query finds more than one record, only the first occurrence is updated.

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    // +++ Update Only Specific Fields +++
    // ...
    // var myquery = { address: "Valley 345" };
    // var newvalues = { $set: { address: "Canyon 123" } };
    // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    // ...


    var myquery = { address: "Valley 345" };
    var newvalues = { name: "Mickey", address: "Canyon 123" };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated!");
        db.close();
    });
});


// The result object looks like this:
// { n: 1, nModified: 2, ok: 1 }

// Return the number of updated documents:
// console.log(res.result.nModified);