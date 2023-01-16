const DB = require("../database/Actions");
const Tools = require("../tools");

let login = async (email, pass) => {
    return await DB.account.lookup({ email: email, pass: pass }).then( async acc => {
        if (!acc) return {"error": true, "message": "Incorrect username or password"}
        return await DB.account.setSessionToken(email, pass);
    })
}

let AccountLogic = {
    "create": async (req, res) => {
        try {        
            let password = req.body.password;
            let pwhash = Tools.md5(password);
            let email = req.body.email;
            let affiliate = req.body.affiliate;
            let type = req.body.type == "user" ? "user" 
                     : req.body.type == "advertiser" ? "advertiser" : "error";

            return await DB.account.create(email, pwhash, type, affiliate).then(async acc => {
                try {
                    if(!acc.error) return {sessionid: await login(acc.dataValues.email, acc.dataValues.password)}
                    return acc;
                }
                catch (err) {
                    console.log(err);
                    return {"error": true, "message": "There was an error creating the account."}
                }
            })
        }
        catch (err) {
            return err;
        }

        
    },
    "login" : async (req, res) => {
        let password = req.body.password;
        let pwhash = Tools.md5(password);
        let email = req.body.email;
        return await login(email, pwhash);
    },
    "forgotPass" : (req, res) => {
        return { "action" : "forgot pass" };
    },
    "delete" : (req, res) => {
        return { "action": "delete" }
    },
    "logout" : (req, res) => {
        return { "action": "logout" }
    }
}

module.exports = AccountLogic;