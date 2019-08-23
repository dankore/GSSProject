const usersCollection = require("../db")
  .db()
  .collection("users");
const commentsCollection = require("../db")
  .db()
  .collection("comments");

// let ObjectID = require("mongodb").ObjectID;

let User = function(data) {
  this.data = data;
  this.errors = [];
};

User.prototype.stored = function() {
  return new Promise(async (resolve, reject) => {
    let data = await usersCollection.insertOne(this.data);
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });
};

User.findProfile = function() {
  return new Promise(async (resolve, reject) => {
    let users = await usersCollection.find().toArray();

    if (users.length) {
      resolve(users);
    } else {
      reject();
    }
  });
};
User.findComment = function() {
  return new Promise(async (resolve, reject) => {
    let comments = await commentsCollection.find().toArray();
    if (comments.length) {
      resolve(comments);
    } else {
      reject();
    }
  });
};
module.exports = User;
