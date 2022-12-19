// MAKE IT PURE 

import { StringifyOptions } from "querystring"

type Employee ={
    name:string
    profession:string
}

type Guest = {
    title:"Mr"|"Mrs"|"Miss"
    forename: string
    surname: string
    age:number
    company: string
}
const removeAgents = (employees:Employee[]) => employees.filter(employee => employee.profession !== 'mole')

const makeNameTags = (guestList:Guest[]) =>{
    return guestList.map(guest =>[guest.title,guest.forename,`${guest.surname},`, guest.company].join(" ")
    )
}

const createPoll = (polls:string[])=>{

    if(!polls) throw Error("no input!")

    return polls.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0
        }
        acc[cur]+=1
        return acc
    }, {});
}

module.exports ={removeAgents,makeNameTags,createPoll}
