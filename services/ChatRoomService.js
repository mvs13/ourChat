const ChatRoom = require("../models/ChatRoom");

class ChatRoomService {
  async createRoom(newRoomData) {
    try {
      const answer = await ChatRoom.create(newRoomData);
      return answer.id;
    } catch (error) {
      throw error;
    }
  }

  async readChatRoomsList() {
    try {
      return await ChatRoom.findAll({ order: [["id"]] });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ChatRoomService;
