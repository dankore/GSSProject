const Comments = require("../models/Comments");

exports.createComment = async (req, res) => {
  let comment = new Comments(req.body);
  await comment.newComment();
  res.redirect("/");
};

// exports.findComments = async (req, res) => {
//   try {
//     let comments = await Comments.findComments();
//     res.render("home", { comments: comments });
//   } catch {
//     res.send("Didnt make it from the server");
//   }
// };
