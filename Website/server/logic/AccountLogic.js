const DB = require("../database/Actions");
const crypto = require('crypto')

let AccountLogic = {
    "create": async (req, res) => {
        let password = "";
        //DB.account.create()
        let pwhash = crypto.createHash('md5').update(password).digest("hex");
        console.log(req)
        return { "action": "createssss", "otherparam": "thisvalue" }

    },
    "login" : (req, res) => {
        console.log("got login");
        return "test";
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