var express = require("express");
var router = express.Router();

const ChatMessageController = require("../controllers/ChatMessageController");
const instChatMessageController = new ChatMessageController();

console.log(`in router`);
router.get("/:roomID", instChatMessageController.readMessagesByRoom);

module.exports = router;
