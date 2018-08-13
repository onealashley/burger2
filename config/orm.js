var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.log(result);
            // callback(result);
        });
    },
    insertOne: function(burgerName, callback) {
        var queryString = "INSERT INTO burgers('burger_name', devoured) VALUES ??, false";
        connection.query(queryString, [burgerName], function(err, results){
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    updateOne: function(burgerName, callback) {
        var queryString = ("UPDATE burgers SET devoured = 'true' WHERE burger_name = ??");
        connection.query(queryString, [burgerName], function(err, result){
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    } 
};

module.exports = orm;

