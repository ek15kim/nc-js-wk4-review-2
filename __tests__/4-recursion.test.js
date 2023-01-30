const { deepKeys, flat, deepRoute } = require('../sections/4-recursion.js');

describe('deepKeys', () => {
    test("takes an object and returns an array", () => {
        const input = { a: 1, b: 2, c: 3 }
        expect(typeof input).toBe('object')
        expect(Array.isArray(deepKeys(input))).toBe(true)
    })
    test("returns an array of all the key values", () => {
        const input = { a: 1, b: 2, c: 3 }
        expect(deepKeys(input)).toEqual(['a', 'b', 'c'])
    })
    test("goes through the object and gests all the keys including any nested objects", () => {
        const input = { a: 1, b: 2, c: { d: 10 } }
        expect(deepKeys(input)).toEqual(['a', 'b', 'c', 'd'])
    })
    test("goes through the object and gests all the keys including any nested objects", () => {
        const input = { a: 1, b: { e: 10 }, c: { d: 10, e: { f: 100, h: 10 } } }
        expect(deepKeys(input)).toEqual(['a', 'b', 'e', 'c', 'd', 'e', 'f', 'h'])
    })
});

describe('deepRoute', () => {
    test("takes an array and a string and returns '' when a string is not in the array", () => {
        const inputArray = ["a", "b", "c"]
        expect(deepRoute(inputArray, "z")).toBe("")
    })
    test("takes an array and a string and returns a number", () => {
        const inputArray = ["a", "b", "c"]
        expect(typeof deepRoute(inputArray, "c")).toBe("string")
    })
    test("returns a route string to a givent element in the array", () => {
        expect(deepRoute(["a", "b", "c"], "c")).toBe('2')
    })
    test("returns 2 times with a route string to a givent element", () => {
        expect(deepRoute(["a", "b", ["c", "d"], "e"], "c")).toBe('2')
    })

});
