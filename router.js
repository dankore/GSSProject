const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);
router.get("/create-profile", userController.create);
router.post("/create-profile", userController.createProfile);
// router.get("/profile/:id", userController.viewSingle);
module.exports = router;
