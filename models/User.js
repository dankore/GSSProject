const usersCollection = require("../db")
  .db()
  .collection("users");

let User = function(data) {
  this.data = data;
  this.errors = [];
};

User.prototype.stored = function(req, res) {
  usersCollection.insertOne(this.data);
};

module.exports = User;
