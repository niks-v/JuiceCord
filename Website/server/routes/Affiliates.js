const Aff = require("../logic/AffiliateLogic");

let Affiliates = (req, res, type) => {
    let p = req.params.action;

    if(type == "get") {
        switch (p) {
            case "delete":
                return Aff.delete(req, res);

            case "return-all":
                return Aff.returnall(req, res);

            default:
                return { "err": true, "info": "No route for affiliate action."};
        }
    }else if(type == "post") {
        switch (p) {
            case "create":
                return Aff.create(req, res);

            default:
                return { "err": true, "info": "No route for affiliate action."};
        }
    }
    
}

module.exports = Affiliates;