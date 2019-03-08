var orm = require("../config/orm.js");

//excecute orm burger specific functions 
var burger = {
  all: function(cb){
    orm.selectAll('burgers_db.burgers', (res)=>{
        cb(res)
    });
  },
  insert: function(name, cb){
    orm.insertOne("burgers_db.burgers", "burger_name", name, (res)=>{
        // console.log("model",name);
        cb(res)
    });
  },
  update: function(name, cb){
    orm.updateOne("burgers_db.burgers","devoured","false/true","burger_name", name, (res)=>{
        cb(res);
    });
  },
};

module.exports = burger;
