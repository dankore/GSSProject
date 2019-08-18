const User = require("../models/User");
exports.home = function(req, res) {
  res.render("home");
};

exports.create = function(req, res) {
  res.render("form");
};

exports.createProfile = function(req, res) {
  let user = new User(req.body);
  user.stored();
  res.render("profile-template", { data: user.data });
};
