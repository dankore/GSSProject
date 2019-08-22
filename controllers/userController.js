const User = require("../models/User");

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
    let users = await User.findSingleById(req.params.id);
    res.render("home", { users: users });
  } catch {
    res.send("Didnt make it from the server");
  }
};
