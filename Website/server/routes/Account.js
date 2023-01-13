const Acc = require("../logic/AccountLogic");

let Account = async (req, res, type) => {
    let p = req.params.action;
    console.log(p);

    if(type == "get"){
        if(p == "logout")           return await Acc.logout(req,res);
        else                        return { "err": true, "info": "No route for account action."};  
    }
    if(type == "post") {
        if(p == "create")           return await Acc.create(req, res);
        if (p == "delete")          return await Acc.delete(req, res);
        if (p == "forgotpass")      return await Acc.forgotPass(req, res);
        if (p == "login")           return await Acc.login(req, res);
        else                        return { "err": true, "info": "No route for account action."};
    }
    else                            return { "err": true, "info": "No route for account action."};
}

module.exports = Account;