var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var sql ="UPDATE customers SET adress = 'Canyon 123' WHERE adress = 'Valley 345'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});

// Notice the WHERE clause in the UPDATE syntax: The WHERE clause specifies which record or records 
// that should be updated. If you omit the WHERE clause, all records will be updated!