const DB = require("../database/Actions");
const Tools = require("../tools");

let login = async (email, pass) => {
    return await DB.account.lookup({ email: email, pass: pass }).then( async acc => {
        if (!acc) {
            console.log("TROUBLE LOGGING IN ----------------- No account")
            return {"error": true, "message": "Incorrect username or password"}
        }
        else {
            return await DB.account.setSessionToken(email, pass);
        }
    })
}

let AccountLogic = {
    "create": async (req, res) => {
        try {        
            let password = req.body.password;
            let pwhash = Tools.md5(password);
            let email = req.body.email;
            let type = req.body.type == "user" ? "user" : req.body.type == "advertiser" ? "advertiser" : "error";

            return await DB.account.create(email, pwhash, type).then(async acc => {
                try {
                    return {sessionid: await login(acc.dataValues.email, acc.dataValues.password)}
                }
                catch (err) {
                    console.log(err);
                    return err;
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