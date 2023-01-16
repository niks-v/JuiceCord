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
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    discord: {
      type: DataTypes.STRING
    },
    affiliate: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sessionid: {
      type: DataTypes.STRING
    },
    sessionexpiration: {
      type: DataTypes.INTEGER
    }
    
  },
  {
    timestamps: true,
  });
  return Account;
};
