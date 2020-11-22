// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var trip = {
  all: function(cb) {
    orm.all("trips", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("trips", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("trips", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("trips", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (tripsController.js).
module.exports = trip;