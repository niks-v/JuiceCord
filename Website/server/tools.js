const crypto = require('crypto');

let Tools = {
    createSessionExpiration: (date = Date.now()) => {
        const hours = 2; //Hours until session expiration
        return Math.floor(date / 1000) + 60*60*2
    },
    checkExpired: (expiration, date = Date.now()) => {
        return expiration < date;
    },
    createSessionId: (date = Date.now()) => {
        let toGenerate = this.getRandomArbitrary(1000000000000, 10000000000000000000000000) + date;
        return this.md5(toGenerate);
    },
    getRandomArbitrary: (min, max) => {
        return Math.random() * (max - min) + min;
    },
    md5: (toHash) => {
        return crypto.createHash('md5').update(toHash + "#@sr32S{5[]]").digest("hex");
    } 
}

module.exports = Tools;