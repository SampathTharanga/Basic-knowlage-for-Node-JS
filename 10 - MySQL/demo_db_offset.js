var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2"; //Note: "OFFSET 2", means starting from the third position, not the second!
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});