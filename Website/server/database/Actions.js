const { Sequelize, DataTypes } = require('sequelize');
const config = require('dotenv').config().parsed;

console.log(config)

const sequelize = new Sequelize(`${config.DATABASENAME}`, `${config.DATABASEUSERNAME}`, `${config.DATABASEPASSWORD}`, {
    host: `${config.DATABASEURL}`,
    dialect: 'postgres'
});



const Account = require("./models/AccountModel")(sequelize, DataTypes);
const Tools = require("../tools");
const { createSessionExpiration } = require('../tools');

sequelize.sync();

let DB = {
    "account": {
        create: async (email, password, type) => {
            console.log(email, password, type)
            return await Account.findOne({ where: { email: email } }).then(async acc=>{
                if (!acc) {
                    return await Account.create({email: email, password: password, type: type})
                }
                else {
                    return {error: true, message: "Email already registered"};
                }
            })
        },
        lookup: async (acc) => {
            let returnval = await Account.findOne({ where: {password: acc.pass, email: acc.email } });
            console.log(returnval)
            return returnval;
        },
        setSessionToken: async (email, password) => {
            let sessionid = Tools.createSessionId()
            
            return await Account.update(
                { sessionid: sessionid, sessionexpiration: Tools.createSessionExpiration() },
                { where: { email: email, password: password } }
            ).then(() => {
                    return sessionid;
                }
            )
        }
    },
    sync: ()=>
    {
        Account.sync({ force: true })
    }
}


module.exports = DB