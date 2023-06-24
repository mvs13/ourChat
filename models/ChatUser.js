const { sequelize } = require("../server/db");
const { DataTypes } = require("sequelize");

const ChatUser = sequelize.define(
  "ChatUser",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    nikname: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    userpic: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
  },
  {
    tableName: "chat_user",
    timestamp: false,
  }
);

module.exports = ChatUser;
