const Aff = require("../logic/AffiliateLogic");

let Affiliates = (req, res) => {
    let p = req.params.action;

    switch (p) {
        case "create":
            return Aff.create(req, res);

        case "delete":
            return Aff.delete(req, res);

        case "return-all":
            return Aff.returnall(req, res);

        default:
            return { "err": true, "info": "No route for affiliate action."};
    }
    
}

module.exports = Affiliates;