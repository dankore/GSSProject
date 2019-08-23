let commentsCollection = require("../db")
  .db()
  .collection("comments");

let Comments = function(data) {
  this.data = data;
  this.errors = [];
  console.log(data);
};

Comments.prototype.newComment = function() {
  return new Promise(async (resolve, reject) => {
    let data = await commentsCollection.insertOne(this.data);
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });
};

// Comments.findComments = function() {
//   return new Promise(async (resolve, reject) => {
//     let comments = await commentsCollection.find().toArray();
//     if (comments.length) {
//       resolve(comments);
//     } else {
//       reject();
//     }
//   });
// };

module.exports = Comments;
