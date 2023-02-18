const fs = require('fs')
// const person = {
//     "name":"Andrew",
//     "planet":"Earth",
//     "age":27
// }

// const BookJson=JSON.stringify(person)
// fs.writeFileSync("Json.json",BookJson)


const Data = fs.readFileSync("Json.json")
const ParsedData = Data.toString()

const Dataobj= JSON.parse(ParsedData)
Dataobj.name='Ammar',Dataobj.age=23;

const updateData=JSON.stringify(Dataobj)
fs.writeFileSync("Json.json",updateData)
