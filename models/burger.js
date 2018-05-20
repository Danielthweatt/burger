// Modules
const orm = require("../config/orm.js");

// Model
const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(columns, values, cb){
        orm.insertOne("burgers", columns, values, function(result){
            cb(result);
        });
    },
    updateOne: function(newColumnValues, condition, cb){
        orm.updateOne("burgers", newColumnValues, condition, function(result){
            cb(result);
        });
    }
};

// Export
module.exports = burger;