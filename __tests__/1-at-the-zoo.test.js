
const {
    classifyAnimals,
    createZooDisplays,
    createAnimalTally
} = require('../sections/1-at-the-zoo.js');

describe('classifyAnimals', () => {
    const animals = [
        { name: 'koala bear', type: 'mammal' },
        { name: 'python', type: 'reptile' },
        { name: 'otter', type: 'mammal' },
        { name: 'eagle', type: 'bird' }
    ];
    const animalType = "mammal"
    test('takes an array and a string as params', () => {
        // any better testing idea than line 20? to test the type is object / array
        expect(typeof animals).toBe('object')
        expect(typeof animalType).toBe('string')
    });
    test("returns an array", () => {
        expect(typeof classifyAnimals(animals, animalType)).toBe("object")
    })
    test("does not mutate the input value", () => {
        classifyAnimals(animals, animalType);
        expect(animals).toEqual([
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ])
    })
    test("given type: mammal - returns a new array of animal objects whose type is the same as the given type", () => {

        const animals = [
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ];
        const animalType = "mammal"

        expect(classifyAnimals(animals, animalType)).toEqual([{ name: 'koala bear', type: 'mammal' }, { name: 'otter', type: 'mammal' }])
    })
    test("given type: reptile - returns a new array of animal objects whose type is the same as the given type", () => {

        const animals = [
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ];
        const animalType = "reptile"

        expect(classifyAnimals(animals, animalType)).toEqual(
            [{ name: 'python', type: 'reptile' }]
        )
    })
});

// describe("", () => {
//     test("", () => { })
// })