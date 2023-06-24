var express = require("express");
var router = express.Router();

const ChatRoomController = require("../controllers/ChatRoomController");
const instChatRoomController = new ChatRoomController();

router.get("/", instChatRoomController.readChatRoomsList);

module.exports = router;
