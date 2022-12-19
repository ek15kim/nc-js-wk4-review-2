
const { removeAgents, makeNameTags, createPoll } = require('../sections/1-human-resources');
const NCFruitBowl = require('../data/poll-data');
const { create } = require('domain');

describe("removeAgents", () => {
    const input = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
    ]
    test("takes and returns an array", () => {
        expect(typeof input).toBe('object')
        expect(typeof removeAgents(input)).toBe('object')
    })
    // check if the input is mutated 
    test("does not mutate the input value", () => {
        removeAgents(input);
        expect(input).toEqual([
            { name: "Sam", profession: "artist" },
            { name: "Mitch", profession: "mole" },
        ])
    })

    test("returns a new array of people objects whose profession is not 'mole'", () => {
        expect(removeAgents(input)).toEqual([
            { name: "Sam", profession: "artist" }
        ])
    })

})


describe("makeNameTags", () => {
    const input = [{
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
    },
    {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
    },]
    test("takes and returns an array", () => {
        expect(typeof input).toBe('object')
        expect(typeof makeNameTags(input)).toBe('object')
    })
    test("does not mutate the input value", () => {
        makeNameTags(input)
        expect(input).toEqual(
            [{
                title: "Mr",
                forename: "Sam",
                surname: "Caine",
                age: 30,
                company: "Northcoders",
            },
            {
                title: "Mr",
                forename: "Kermit",
                surname: "The Frog",
                age: 35,
                company: "Jim Henson Studios",
            },]
        )
    })
    test("returns a guest list only with key values from the input object", () => {
        expect(makeNameTags(input)).toEqual([
            'Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios'
        ])
    })
})


describe("createPoll", () => {
    const input = ["cake", "biscuit", "biscuit"]
    test("receives and returns an object", () => {
        expect(typeof input).toBe('object');
        expect(typeof createPoll(input)).toBe('object');
    })
    test("returns the expected value in an object", () => {
        expect(typeof createPoll(["cake", "biscuit", "biscuit"])).toBe("object")
        expect(createPoll(["cake", "biscuit", "biscuit"])).toEqual({ cake: 1, biscuit: 2 })
    })
    // how to test more ?
    test("takes an imported data and returns the expected", () => {
        expect(typeof NCFruitBowl).toBe("object")
        expect(createPoll(NCFruitBowl)).toEqual({
            apple: 276,
            pear: 223,
            banana: 263,
            orange: 238,
            'lonesome plum': 1
        })
    })
})
