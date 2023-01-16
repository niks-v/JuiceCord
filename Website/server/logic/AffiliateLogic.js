const DB = require("../database/Actions");
const Tools = require("../tools");

let AffiliateLogic = {
    "create" : async (req, res) => {
        return await DB.affiliate.create(req.body.sessionid, req.body.name);
    },
    "delete" : (req, res) => {
        return { "action": "delete affiliate link" }
    },
    "list" : async (req, res) => {
        return await DB.affiliate.list(req.body.sessionid);
    }
}

module.exports = AffiliateLogic;