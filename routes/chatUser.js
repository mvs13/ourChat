var express = require("express");
var router = express.Router();

const ChatUserController = require("../controllers/ChatUserController");
const instChatUserController = new ChatUserController();

router.get("/", instChatUserController.readUsersListByName);

module.exports = router;
