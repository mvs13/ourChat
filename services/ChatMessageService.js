const ChatMessage = require("../models/ChatMessage");

class ChatMessageService {
  async readMessagesByRoom(roomID) {
    try {
      return await ChatMessage.findAll({
        attributes: ["id", "message", "was_sent", "message_of_user"],
        where: { message_of_room: roomID },
        order: [["was_sent", "DESC"]],
        limit: 10,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ChatMessageService;
