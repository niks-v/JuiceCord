const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Affiliate = sequelize.define("Affiliate", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    reference: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  });
  return Affiliate;
};
