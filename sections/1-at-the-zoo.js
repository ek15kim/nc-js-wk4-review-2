

const classifyAnimals = (animals, animalType) => animals.filter(animal => animal.type === animalType)

const createZooDisplays = (animalList) => {
    if (!animalList.length) throw new Error("Invalid input")
    return animalList.map(animal => `My name is ${animal.name}, and I am a ${animal.species} and I'm originally from ${animal.nativeRegion}`)
}
const createAnimalTally = (animals) => {
    if (!animals) throw Error("invalid input")
    //['tiger', 'parrot', 'parrot']
    return animals.reduce((acc, cur) => {
        if (!acc[cur]) acc[cur] = 0
        acc[cur] += 1;
        return acc
    }, {})
}

module.exports = { classifyAnimals, createZooDisplays, createAnimalTally }