// Modules
const connection = require("../config/connection.js");

// Helpers
function questionMarkify(values){
    return values.map(function(element){
        return "?";
    }).toString();
};

function sqlify(newColumnValues){
    const sqlified = {};
    newColumnValues.forEach(function(element){
        
    });
    return sqlified;
};

// ORM
const orm = {
    selectAll: function(table, cd){
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
    updateOne: function(table, newColumnValues, condition, cd){
        connection.query(`UPDATE ${table} SET ? WHERE ?`, 
        sqlify(newColumnValues).push(condition), 
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