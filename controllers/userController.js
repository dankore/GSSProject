const User = require("../models/User");

// exports.home = function(req, res) {
//   res.render("home");
// };

exports.create = function(req, res) {
  res.render("form");
};

exports.createProfile = async function(req, res) {
  let user = new User(req.body);
  user.stored();
  res.send("Success!");
};

exports.home = async (req, res) => {
  try {
    console.log(req.params.id);
    let users = await User.findSingleById(req.params.id);
    res.render("home", { users: users });
  } catch {
    res.send("Didnt make it from the server");
  }
};
