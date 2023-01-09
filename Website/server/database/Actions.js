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
            Account.findOne({ where: { email: email } }).then(async acc=>{
                console.log("tried findone")
                if (!acc) {
                    console.log("account find one " + acc)
                    //console.log(returnval);
                    return new Promise((res, rej) => {
                        res(Account.create({email: email, password: password, type: type}))
                    })
                }
                else {
                    throw new Error("Email already registered");
                }
            })
        },
        lookup: async (email, password) => {
            let returnval = await Account.findOne({ where: { email: email, password: password } });
            console.log(returnval)
            return returnval;
        },
        setSessionToken: async (email, password) => {
            let sessionid = Tools.createSessionId()
            Account.update(
                { sessionid: sessionid, sessionexpiration: Tools.createSessionExpiration() },

                { where: { email: email, password: password } }
            ).success(result => {
                return sessionid;
            }
            ).error(err => {
                return {"error": true, "message": "Account update sessionid and expiration didn't work."}
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