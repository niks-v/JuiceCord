const Acc = require("../logic/AccountLogic");

let Account = async (req, res, type) => {
    let p = req.params.action;
    console.log(p);

    if(type == "get"){
        switch (p) {
            case "logout":
                return await Acc.logout(req, res);

            default:
                return { "err": true, "info": "No route for account action."};
        }
    }
    else if(type == "post") {
        if(p == "create")           await Acc.create(req, res).then(response =>{ return response; });
        else if (p == "delete")     return await Acc.delete(req, res);
        else if (p == "forgotpass") return await Acc.forgotPass(req, res);
        else if (p == "login")      return await Acc.login(req, res);
        else                        return { "err": true, "info": "No route for account action."};
    }
}

module.exports = Account;