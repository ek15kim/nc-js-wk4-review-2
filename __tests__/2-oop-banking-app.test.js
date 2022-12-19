
const { User } = require("../sections/2-oop-banking-app")
// jest.mock("../sections/2-oop-banking-app.js")
// beforeEach(() => {
// Clear all instances and calls to constructor and all methods:
//     User.mockClear();
// });

describe("Banking App", () => {
    test("returns an instance ", () => {
        const testInstance = new User()
        expect(typeof testInstance).toBe("object")
        expect(testInstance).toEqual({ currentBalance: 0 })
        // expect(User).toHaveBeenCalledTimes(1) -- not working
    })
    test("has pots property,an empty array", () => {
        const newUser = new User()
        expect(newUser).toHaveProperty("pots")
        expect(typeof newUser.pots).toBe('object')
    })
    test("depositMoney: update currentBalance in pounds", () => {
        const newUser = new User()
        newUser.depositMoney(10.56)
        expect(newUser.currentBalance).toBe(10.56)
        newUser.depositMoney(2.3)
        expect(newUser.currentBalance).toBe(12.86)
    })
    test("createNewPot: add a new property to the pots", () => {
        const anatUser = new User()
        anatUser.pots
        anatUser.createNewPot("holiday")
        expect(anatUser.pots.holiday).toEqual({ potBalance: 0 })
        anatUser.createNewPot("mortgage_deposit")
        expect(anatUser.pots.mortgage_deposit).toEqual({ potBalance: 0 })
    })
    test("addToPot: dd money to the 'potBalance' of a given pot ", () => {
        const anatUser = new User()
        anatUser.addToPot("holiday", 30);
        expect(anatUser.pots.holiday).toEqual({ potBalance: 30 })
    })
    test("transferToPot: transfer money from the 'currentBalance' to the 'potBalance'", () => {
        const anatUser = new User();
        anatUser.createNewPot("holiday");
        anatUser.depositMoney(10);
        anatUser.transferToPot("holiday", 5.03)
        expect(anatUser.pots.holiday).toEqual({ potBalance: 5.03 })
    })
    test("transferToPot: insufficient balance'", () => {
        const anatUser = new User();
        const logSpy = jest.spyOn(console, 'log');

        anatUser.createNewPot("holiday");
        anatUser.depositMoney(5);
        anatUser.transferToPot("holiday", 10)
        expect(anatUser.pots.holiday).toEqual({ potBalance: 0 })
        expect(logSpy).toHaveBeenCalledWith("insufficient balance!")
    })
})