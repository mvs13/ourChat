const { sequelize } = require("../server/db");
const { DataTypes } = require("sequelize");

const ChatMessage = sequelize.define(
  "ChatMessage",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    was_sent: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "chat_message" }
);

module.exports = ChatMessage;
