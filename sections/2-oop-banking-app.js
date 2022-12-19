class User {
    constructor() {
        this.currentBalance = 0;
        this.pots = {}
    }
    depositMoney(added) {
        this.currentBalance += added;
    }
    createNewPot(key) {
        this.pots[key] = {
            potBalance: 0
        }
    }
    addToPot(key, added) {
        if (!this.pots[key]) this.createNewPot(key)
        this.pots[key].potBalance += added
    }
    transferToPot(key, transferred) {
        if (!this.pots[key]) this.createNewPot(key)
        if (transferred <= this.currentBalance) {
            this.currentBalance -= transferred
            this.pots[key].potBalance += transferred
        } else {
            console.log("insufficient balance!")
        }
    }
}

module.exports = { User };
