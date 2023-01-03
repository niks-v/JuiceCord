const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("Account", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  });
  return Account;
};
