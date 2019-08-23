const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const commentsController = require('./controllers/commentsController')

router.get("/", userController.home);
router.get("/create-profile", userController.create);
router.post("/create-profile", userController.createProfile);
router.post("/comments", commentsController.createComment);
module.exports = router;
