let AffiliateLogic = {
    "create" : (req, res) => {
        return { "action": "create affiliate link"}
    },
    "delete" : (req, res) => {
        return { "action": "delete affiliate link" }
    },
    "returnall" : (req, res) => {
        return { "action": "return all affiliate links" }
    }
}

module.exports = AffiliateLogic;