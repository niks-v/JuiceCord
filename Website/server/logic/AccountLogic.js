let AccountLogic = {
    "create" : (req, res) => {
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