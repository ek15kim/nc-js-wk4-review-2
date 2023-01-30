
const { create } = require('domain');
const {
    classifyAnimals,
    createZooDisplays,
    createAnimalTally
} = require('../sections/1-at-the-zoo.js');


describe('classifyAnimals', () => {

    test('takes an array and a string as params', () => {
        const animals = [
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ];
        const animalType = "mammal"
        // any better testing idea to test the type is object / array
        expect(typeof animals).toBe('object')
        expect(typeof animalType).toBe('string')
    });
    test("returns an array", () => {
        const animals = [
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ];
        const animalType = "mammal"
        expect(typeof classifyAnimals(animals, animalType)).toBe("object")
    })
    test("does not mutate the input value", () => {
        const animals = [
            { name: 'koala bear', type: 'mammal' },
            { name: 'python', type: 'reptile' },
            { name: 'otter', type: 'mammal' },
            { name: 'eagle', type: 'bird' }
        ];
        const animalType = "mammal"
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


describe("createZooDisplays", () => {

    // test("throws an error when the input is empty", () => {
    //     const emptyArray = []
    //     expect(createZooDisplays(emptyArray)).toThrow("invalid")
    //     expect(createZooDisplays(emptyArray)).toThrow(new Error("Invalid input"))
    // })
    test("takes and returns an array and does not mute the input value", () => {
        const animals = [
            {
                name: 'Montgomery',
                species: 'Southern African meerkat',
                nativeRegion: 'Botswana'
            }
        ];
        expect(typeof animals).toBe("object")
        expect(typeof createZooDisplays(animals)).toBe("object")
        createZooDisplays(animals)
        expect(animals).toEqual([
            {
                name: 'Montgomery',
                species: 'Southern African meerkat',
                nativeRegion: 'Botswana'
            }
        ])
    })
    test("animal objects containing name, species and nativeRegion keys", () => {
        const animals =
        {
            name: 'Montgomery',
            species: 'Southern African meerkat',
            nativeRegion: 'Botswana'
        }

        expect(animals).toHaveProperty("name")
        expect(animals).toHaveProperty("species")
        expect(animals).toHaveProperty("nativeRegion")

        // deep equality - how to fix this?
        // expect(Object.keys(animals).sort()).toEqual(["name", "species", "nativeRegion"])
    })
    test("returns a new array with a formatted text for 1 animal", () => {
        const singleAnimal = [
            {
                name: 'Montgomery',
                species: 'Southern African meerkat',
                nativeRegion: 'Botswana'
            }
        ];
        expect(createZooDisplays(singleAnimal)).toEqual(["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana"])
    })
    test("returns a new array with a formatted text for all animals", () => {
        const animals = [
            {
                name: 'Montgomery',
                species: 'Southern African meerkat',
                nativeRegion: 'Botswana'
            },
            {
                name: 'Salome',
                species: 'Rattlesnake',
                nativeRegion: 'Argentina'
            }
        ];
        expect(createZooDisplays(animals)).toEqual(["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana",
            "My name is Salome, and I am a Rattlesnake and I'm originally from Argentina"])
    })

})

describe("createAnimalTally", () => {
    test("takes an array and it does not mutate the input", () => {
        const animalList = ['tiger']
        createAnimalTally(animalList)
        expect(animalList).toEqual(['tiger'])
    })

    test("returned object has all the animals of the input list as keys", () => {
        const animalList = ['tiger', 'parrot']
        const createAnimalTallyFunc = createAnimalTally(animalList)
        expect(createAnimalTallyFunc).toHaveProperty("tiger")
        expect(createAnimalTallyFunc).toHaveProperty("parrot")
        // expect(Object.keys(createAnimalTallyFunc).sort()).toEqual(animalList)

    })
    test("returns an array containing a tally object counting the animal type: ['tiger']", () => {
        const animalList = ['tiger']
        const createAnimalTallyFunc = createAnimalTally(animalList)
        expect(typeof createAnimalTallyFunc).toBe("object")
        expect(createAnimalTallyFunc).toEqual({ tiger: 1 })
    })

    test("returns an array containing a tally object counting each of the different animal types: ['tiger', 'parrot', 'parrot']", () => {
        const animalList = ['tiger', 'parrot', 'parrot']
        const createAnimalTallyFunc = createAnimalTally(animalList)
        expect(typeof createAnimalTallyFunc).toBe("object")
        expect(createAnimalTallyFunc).toEqual({ tiger: 1, parrot: 2 })
    })

})