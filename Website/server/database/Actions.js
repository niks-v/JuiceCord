const { Sequelize, DataTypes } = require('sequelize');
const config = require('dotenv').config().parsed;

console.log(config)

const sequelize = new Sequelize(`${config.DATABASENAME}`, `${config.DATABASEUSERNAME}`, `${config.DATABASEPASSWORD}`, {
    host: `${config.DATABASEURL}`,
    dialect: 'postgres'
});



const Account = require("./models/AccountModel")(sequelize, DataTypes);
const Affiliate = require("./models/AffiliateModel")(sequelize, DataTypes);

const Tools = require("../tools");
const { createSessionExpiration } = require('../tools');

sequelize.sync();

let DB = {
    "account": {
        "create": async (email, password, type, affiliate) => {
            console.log(email, password, type, affiliate)
            return await Account.findOne({ where: { email: email } }).then(async acc=>{
                if (!acc) {
                    return await Account.create({email: email, password: password, type: type, affiliate: affiliate})
                }
                else {
                    return {error: true, message: "Email already registered"};
                }
            })
        },
        "lookup": async (acc) => {
            let returnval = await Account.findOne({ where: {password: acc.pass, email: acc.email } });
            console.log(returnval)
            return returnval;
        },
        "setSessionToken": async (email, password) => {
            let sessionid = Tools.createSessionId()
            
            return await Account.update(
                { sessionid: sessionid, sessionexpiration: Tools.createSessionExpiration() },
                { where: { email: email, password: password } }
            ).then(() => {
                    return sessionid;
                }
            )
        },
        "getWithSessionId": async (sessionid) => {
            return await Account.findOne({ where: { sessionid: sessionid }});
        }
    },
    "affiliate": {
        "create": async (sessionid, name) => {
            return await DB.account.getWithSessionId(sessionid).then(async acc=> {
                return await Affiliate.findOne({ where: {user: acc.id, name:name} }).then(async affName=>{
                    if (!affName) {
                        return await Affiliate.create({user: acc.id, name: name}).then(async ()=>{
                            return await DB.affiliate.list(sessionid);
                        })
                    }
                    else {
                        return {error: true, message: "Error creating affiliate link. Name for link is taken."};
                    }
                })
            })
        },
        "list": async (sessionid) => {
            return await DB.account.getWithSessionId(sessionid).then(async acc => {
                return await Affiliate.findAll({ where: { id: acc.dataValues.id} });
            })
            
        }
    },
    "drop": ()=>
    {
        Account.drop({ force: true })
        Affiliate.drop({ force: true })
    }
}


module.exports = DB