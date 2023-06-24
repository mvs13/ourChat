const ChatRoom = require("./ChatRoom");
const ChatUser = require("./ChatUser");
const ChatMessage = require("./ChatMessage");

ChatMessage.belongsTo(ChatUser, { foreignKey: "message_of_user" });
ChatMessage.belongsTo(ChatRoom, { foreignKey: "message_of_room" });

ChatUser.hasMany(ChatMessage, {
  foreignKey: "message_of_user",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

ChatRoom.hasMany(ChatMessage, {
  foreignKey: "message_of_room",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

const initModels = async () => {
  await ChatRoom.sync({ force: false, alter: true });
  await ChatUser.sync({ force: false, alter: true });
  await ChatMessage.sync({ force: false, alter: true });
  console.log(`Models initialization complite successfuly`);
};

module.exports = { initModels, ChatRoom, ChatUser, ChatMessage };
