const { sequelize } = require("../server/db");
const { DataTypes } = require("sequelize");

const ChatRoom = sequelize.define(
  "ChatRoom",
  {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "chat_room",
    timestamp: false,
  }
);

module.exports = ChatRoom;
