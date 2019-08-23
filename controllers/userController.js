const User = require("../models/User");
// const Comments = require("../models/Comments");

exports.create = function(req, res) {
  res.render("form");
};

exports.createProfile = async (req, res) => {
  let user = new User(req.body);
  await user.stored();
  res.redirect("/");
};

exports.home = async (req, res) => {
  try {
    let users = await User.findProfile();
    let comments = await User.findComment();

    res.render("home", { users: users, comments: comments });
  } catch {
    res.send("Didnt make it from the server");
  }
};
