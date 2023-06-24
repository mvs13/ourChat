const ChatUser = require("../models/ChatUser");

class ChatUserService {
  // Список пользователей для select при регистрации
  async readUsersListByName() {
    try {
      return await ChatUser.findAll({
        attributes: [
          ["id", "value"],
          ["name", "label"],
        ],
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ChatUserService;
