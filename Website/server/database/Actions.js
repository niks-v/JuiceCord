const { Sequelize, DataTypes } = require('sequelize');
const config = require('dotenv').config().parsed;

console.log(config)

const sequelize = new Sequelize(`${config.DATABASENAME}`, `${config.DATABASEUSERNAME}`, `${config.DATABASEPASSWORD}`, {
    host: `${config.DATABASEURL}`,
    dialect: 'postgres'
});



const Account = require("./models/AccountModel")(sequelize, DataTypes);

sequelize.sync();

let DB = {
    "test": async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        Account.create({firstName: "test", lastName: "jones"})
        const accounts = await Account.findAll();
        console.log(accounts);
    }
}


module.exports = DB