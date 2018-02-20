var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		});
	}, 

	create: function(name, cb){
		orm.create("burgers", name, cb);
	},

	update: function(id, cb){
		orm.update("burgers", id, cb);
	},

	delete: function(name, cb){
		orm.delete("burgers", name, cb);
	}
}
	// create: function(cols, vals, cb){
	// 	orm.insertOne("burgers", cols, vals, function(res){
	// 		cb(res);
	// 	});
	// },
	// update: function(objColVals, condition, cb){
	// 	orm.updateOne("burgers", objColVals, condition, function(res){
	// 		cb(res);
	// 	});
	// },
	// delete: function(condition, cb){
	// 	orm.deleteOne("burgers", condition, function(res){
	// 		cb(res);
	// 	});
	// }


module.exports = burger;