const usersCollection = require("../db")
  .db()
  .collection("users");

let ObjectID = require("mongodb").ObjectID;

let User = function(data) {
  this.data = data;
  this.errors = [];
};

User.prototype.stored = function(req, res) {
  usersCollection.insertOne(this.data);
};

User.findSingleById = function(id) {
  // console.log(id);
  return new Promise(async (resolve, reject) => {
    let users = await usersCollection.find().toArray();
    // console.log(users);
    if (users.length) {
      resolve(users);
    } else {
      reject();
    }
  });
};
module.exports = User;
