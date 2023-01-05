const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("Account", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discord: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sessionid: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  });
  return Account;
};
