const ChatUserService = require("../services/ChatUserService");
const instChatUserService = new ChatUserService();

class ChatUserController {
  async readUsersListByName(req, res) {
    try {
      const list = await instChatUserService.readUsersListByName();
      return res.json(list);
    } catch (error) {}
  }
}

module.exports = ChatUserController;
