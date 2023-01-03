const Acc = require("../logic/AccountLogic");

let Account = (req, res) => {
    let p = req.params.action;

    switch (p) {
        case "create":
            return Acc.create(req, res);

        case "delete":
            return Acc.delete(req, res);

        case "forgotpass":
            return Acc.forgotPass(req, res);

        case "login":
            return Acc.login(req, res);

        case "logout":
            return Acc.logout(req, res);

        default:
            return { "err": true, "info": "No route for account action."};
    }
    
}

module.exports = Account;