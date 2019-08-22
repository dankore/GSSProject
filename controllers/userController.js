const User = require("../models/User");

exports.create = function(req, res) {
  res.render("form");
};

exports.createProfile = async (req, res) => {
  try {
    let user = await new User(req.body);
    res.render("profile-template", { user: user });
    user.stored();
  } catch {
    res.send("Sorry, something went wrong.");
  }
};

exports.home = async (req, res) => {
  try {
    let users = await User.findSingleById(req.params.id);
    res.render("home", { users: users });
  } catch {
    res.send("Didnt make it from the server");
  }
};
