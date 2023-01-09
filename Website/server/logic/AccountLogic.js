const DB = require("../database/Actions");
const Tools = require("../tools");

let login = async (email, pass) => {
    const account = await DB.account.lookup({ email: email, pass: pass }).then( async acc => {
        if (!account) {
            return {"error": true, "message": "Incorrect username or password"}
        }
        else {
            return {sessionid: await DB.account.setSessionToken(email, pass)};
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

            DB.account.create(email, pwhash, type).then(acc => {
                console.log("AccountLogic.js:create():")
                console.log(acc);
            })

            try {
                return {sessionid: await login(email, pwhash)}
            }
            catch (err) {
                console.log(err);
                return err;
            }
        }
        catch (err) {
            return err;
        }

        
    },
    "login" : (req, res) => {
        let password = req.body.password;
        let pwhash = Tools.md5(password);
        let email = req.body.email;
        return login(email, pwhash);
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