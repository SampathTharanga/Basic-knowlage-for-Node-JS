var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT name, adress FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        
        // As you can see from the result of the example above, the fields object is an array containing information about each field as an object.
        // To return e.g. the name of the second field, just refer to the second array item's name property:
        //console.log(fields[1].name);
    });
});