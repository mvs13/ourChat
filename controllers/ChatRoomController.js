const ChatRoomService = require("../services/ChatRoomService");
const instChatRoomService = new ChatRoomService();

class ChatRoomController {
  async readChatRoomsList(req, res) {
    try {
      const list = await instChatRoomService.readChatRoomsList();
      return res.json(list);
    } catch (error) {}
  }
}

module.exports = ChatRoomController;
