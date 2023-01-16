const Aff = require("../logic/AffiliateLogic");

let Affiliates = async (req, res, type) => {
    let p = req.params.action;
    console.log(p);

    if(type == "get"){
        if(p == "delete")           return await Aff.delete(req,res);
        else                        return { "err": true, "info": "No route for affiliate action."};  
    }
    if(type == "post") {
        if(p == "create")           return await Aff.create(req, res);
        if(p == "list")             return await Aff.list(req,res);
        else                        return { "err": true, "info": "No route for affiliate action."};
    }
    else                            return { "err": true, "info": "No route for affiliate action."};
}

module.exports = Affiliates;