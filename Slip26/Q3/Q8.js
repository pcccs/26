import { createConnection } from 'mysql';

var con = createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE DB2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    });
});
