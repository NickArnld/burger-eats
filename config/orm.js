var connection = require("./connection.js");


var orm = {    
    selectAll: function(tableInput, callback) {
        connection.query("SELECT * FROM " + tableInput + ";", 
        function(err, result) {
            if (err) throw err;        
            callback(result);
        });
    },
    insertOne: function(tableInput, propName, entryName, callback) {
        connection.query("INSERT INTO "+tableInput+" ("+propName+") VALUES ('"+entryName+"');", 
        function(err, result) {
            if (err) throw err;        
            callback(result);
        });
    },
    updateOne: function(tableInput, propName, propVal, sqlName, nameVal, callback) {
        connection.query("UPDATE "+tableInput+" SET "+propName+"="+propVal+" WHERE "+sqlName+"="+nameVal+";", 
        function(err, result) {
            if (err) throw err;        
            callback(result);
        });
    },
}

module.exports = orm;