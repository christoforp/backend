const mongoose = require("mongoose")   // We initalize function "mongoose", which use "mongoose" library.


const url = process.env.MONGODB_URI


// We initalize variable "url", which get envinronment variables value => "process.env.MONDODB_URI"
// Intead of database site we are using MONGODB_URL envinronment variable  


console.log('connecting to', url) // We are connecting to database and this print that text whereas it connect MondoDB environment variables database

mongoose.connect(url)
.then(result => {  // We have been defined function of succes, when we are trying to connect MongoDB
    console.log('connected to the MongoDB') // Print that text into terminal when connect happens.
})

.catch((error) => { // We have been defined "error message", when connecting to database not work.
    console.log('connecting to the MongoDB Was failed. Please Try again:', error.message  ) // Print that text into terminal and at same time shows 
// We have been denifed fail and success handler functions, which tells lucky or fail connection while conducting process.

})






// We initalize variable "personSchema", which purpose is to determine, which mode we save those object into database. 
// So practically this means that, which mode they will be saved on the database.
const personSchema = new mongoose.Schema({
    name: String, // We determine variable name, which is found in database => persons.name
    number: String, // We initalize variable "number", which is found in database  => persons.number

})

// We de can determine with this that which mode it show Json data
personSchema.set('toJSON', {
    transform: (document, returnedObject) => { // We can make changes to data with "transoform" function before we return it to user
        returnedObject.id = returnedObject._id.toString() // We initalize variable "returnedObject.id", which is equals as "returnedObject._id.toString()"
        delete returnedObject._id  // We are using "delete returnedObject._id" because we wanto get rid of object indpendent identifier
        delete returnedObject.__v // We don't also want to show and return that idenfier "__v" of Mongo DB, So we are using "delete" to get rid of that.

    }
})





module.exports = mongoose.model('persons', personSchema) // We are using determining "mongoose" own module with "moduule.exports", So Its external section are seen when determine value for that "moduule.exports" it get value => "Person"
// There is no seen another things inside of that "module" like as Url or mongoose.
// "mongoose.model"  will automatically move that model in MongoDB for example "Person" will move automatically into "persons" collection.
// We take that export (function) to  use in application index.js file.
// mongoose  convention  is to determine automatically that collension as the plural and changes big letter into small.


