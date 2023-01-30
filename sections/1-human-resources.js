// MAKE IT PURE 


const removeAgents = (employees) => employees.filter(employee => employee.profession !== 'mole')

const makeNameTags = (guestList) => {
    return guestList.map(guest => [guest.title, guest.forename, `${guest.surname},`, guest.company].join(" ")
    )
}

const createPoll = (polls) => {

    if (!polls) throw Error("no input!")

    return polls.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0
        }
        acc[cur] += 1
        return acc
    }, {});
}

module.exports = { removeAgents, makeNameTags, createPoll }
