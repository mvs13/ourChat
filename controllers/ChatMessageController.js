const ChatMessageService = require("../services/ChatMessageService");
const instChatMessageService = new ChatMessageService();

class ChatMessageController {
  async readMessagesByRoom(req, res) {
    try {
      // console.log(req.params.roomID);
      const list = await instChatMessageService.readMessagesByRoom(
        req.params.roomID
      );
      return res.json(list);
    } catch (error) {}
  }
}

module.exports = ChatMessageController;
