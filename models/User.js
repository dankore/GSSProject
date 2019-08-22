const usersCollection = require("../db")
  .db()
  .collection("users");

// let ObjectID = require("mongodb").ObjectID;

let User = function(data) {
  this.data = data;
  this.errors = [];
};

User.prototype.stored = function() {
  usersCollection.insertOne(this.data);
};

User.findSingleById = function(id) {
  return new Promise(async (resolve, reject) => {
    let users = await usersCollection.find().toArray();
    if (users.length) {
      resolve(users);
    } else {
      reject();
    }
  });
};
module.exports = User;
