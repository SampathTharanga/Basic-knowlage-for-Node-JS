// You can also use a ? as a placeholder for the values you want to escape.
// In this case, the variable is sent as the second parameter in the query() method:

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;;
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE adress = ?';
    con.query(sql, [adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});