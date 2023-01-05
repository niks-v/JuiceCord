const Acc = require("../logic/AccountLogic");

let Account = async (req, res, type) => {
    let p = req.params.action;

    if(type == "get"){
        switch (p) {
            case "logout":
                return await Acc.logout(req, res);

            default:
                return { "err": true, "info": "No route for account action."};
        }
    }
    else if(type == "post") {
        switch (p) {
            case "create":
                return await Acc.create(req, res);
    
            case "delete":
                return await Acc.delete(req, res);
    
            case "forgotpass":
                return await Acc.forgotPass(req, res);
    
            case "login":
                return await Acc.login(req, res);
    
            default:
                return { "err": true, "info": "No route for account action."};
        }
    }
    
}

module.exports = Account;