// Modules
const connection = require("../config/connection.js");

// Helpers
function questionMarkify(values){
    return values.map(function(element){
        return "?";
    }).toString();
};

// ORM
const orm = {
    selectAll: function(table, cb){
        connection.query(`SELECT * FROM ${table}`, function(error, result){
            if (error) {
                console.log(`Oh boy, it broke: ${error}`);
            } else {
                cb(result);
            }
        });
    },
    insertOne: function(table, columns, values, cb){
        connection.query(`INSERT INTO ${table} (${columns.toString()}) VALUES (${questionMarkify(values)})`, 
        values, 
        function(error, result){
            if (error) {
                console.log(`Oh boy, it broke: ${error}`);
            } else {
                cb(result);
            }
        });
    },
    updateOne: function(table, newColumnValues, condition, cb){
        connection.query(`UPDATE ${table} SET ? WHERE ?`, 
        [newColumnValues, condition], 
        function(error, result){
            if (error) {
                console.log(`Oh boy, it broke: ${error}`);
            } else {
                cb(result);
            }
        });
    }
};

// Export
module.exports = orm;