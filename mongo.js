const mongoose = require("mongoose")   // We initalize function "mongoose", which use "mongoose" library.

// Whereas we are typing terminal only "node mongo.js", then it get value under <3, So "node mongo.js" value is equal as "process.argv[0] and process.argv[1]"
if (process.argv.length<3) { // Whereas process.argv.lenght is less than 3, then we conduct things inside of {...} function
  console.log(`You just typed to the terminal command, which length is total of ${process.argv.length}!`) // it print that text into terminal, when if condition will work and "process.argv.lenght" is <3
  console.log('give password as argument') //  if "if" condition will work So process.argv.lenght is under 3, Then console.log()" print that text into terminal,
  process.exit(1) // This fucntion will stop running application with "process.exit(1)"
}

  // Aim part of this exercises is to add data to MongoDB with node.js terminal, So if we want add a new person it will happen as follow => "node mongo.js password "Christofor Pavlidi" "040-4659788" and this equal as process.argv[0], process.argv[1], process.argv[2], process.argv[3], process.argv[4]"
const password = process.argv[2] // We initalize function "password", which purpose is to get into command line parameters. So the code assume that it value in parametes mode of user what have been creating in Mongo Atlas
// It is equal as "commandline parameter" "process.argv[2]"

// When we run application with command mongo.js, then password add mongoose.database a new documents.

 // We initialize data base, where we get connection to data base. We are using url from MongoDB Library


 const url =  `mongodb+srv://christoforp:christoforp@cluster0.osmk6.mongodb.net/myPhonebook?retryWrites=true&w=majority `


 // "mongoose.connect(url)" purpose is to connect mongooseDB Database 

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true})



// We initalize variable "mongoframe", which purpose is to determine which  mode  we save them  into  phonebook database
// So practically it means and tells what mode they will be saved to database.
  const  mongoframe = new mongoose.Schema({
    name: String, // We initalize variable name, which is found in database => persons.name
    number: String // We initalize variable number, which is found in database => persons.number
  })

// We determine variable "Post", which is equal as "mongoose.model()" function. Notice that if "persons" value would be "Christo", then data will move under to chistos collection.
// This mean that Mongoose.DB will automatically change and move all letters to small and will put S letter to end of that. 
// So function in belov will get  => 'persons' variable and  "mongoframe" values.
  const Post  =  mongoose.model('persons', mongoframe)

  // We determine   model Post, where First parameter String of Post determine that mongoose saves similar object of persons to collection name as persons.
  // As we see that is in plural mode because mongoose  convention  is to determine automatically that collension as the plural.



  if(process.argv.length === 3){ // If that if condition will work, So ("process.argv.length is true with 3") then it conduct those things inside of that function {...}
    // Whereas we don't want to add anything new into database, then we just use "node mongo.js randompassword", then application will conduct function in belov and print that what is already found in database. 
    // We are applying objects to base "Post"  with method find thats method search condition is an  "parameter."
    Post 
    .find({}) // Variable "Post" is equal as "phonebook.persons" and it will find value of {...} function and return it to  under "persons" variable
    .then(result =>{
      console.log('Phonebook has currently  fetched the following persons:') // "console.log()" print that text into terminal
      result.forEach(person => { // Whereas there is two value of inside "showResult" variable then we conduct "forEach()" function in both site separately. 
       console.log(person.name, person.number) // Print those variables values into terminal for example => "Christofor 040-4659788"
      })

      console.log('Nothing has been added to the phonebook') // "console.log()" print that text into phonebook.
      mongoose.connection.close() //When object have been added into database. "Mongoose.connection.close()" will close connection to database without this program executing will not ever stop. 
  


    })
  }


  // Aim part of this exercises is to add data to MongoDB with node.js terminal, So if we want add a new person it will happen as follow => "node mongo.js password "Christofor Pavlidi" "040-4659788" and this equal as process.argv[0], process.argv[1], process.argv[2], process.argv[3], process.argv[4]"
    const nameConsole = process.argv[3]  // We initalize variable "name", which is equal as "commandline parameters" value =>  " process.argv[3]""
    const numberConsole = process.argv[4] // We initalize variable "number", which get   "commandline parameters" value  => "process.argv[4}"






  // We initalize variable "fetch", which uses variables "Post" function, So it use  "mongoframe" variables Schema, where those String "name" and "number" get => belov variables (nameConsole) (numberConsole) values. 
 // We Creating a new object in to database  with that  similar model "fetch" variable, which uses variables "Post" function
 // "models" are like as constructor functions, which creting a new javascript object according to parameters because they have been created by construction functions  they all have own model skills So practically it means that they can save object into database with methods. 
 
    const fetch = new Post({
      name: nameConsole, // So name: String  =>  nameConsole and it moves database collections  => persons.name
      number: numberConsole // number: String  =>  numberConsole, which move to database collections => persons.number
    })

    
  // Whereas if condition will work, so if(process.argv.lenght is bigger than 4) then it conduct things inside of {...} function 
    if(process.argv.length > 4){
      fetch  // We save data of "fetch.save" variables database, So it will be saved into collections => persons.name 
      .save().then(response =>{ 
          console.log(`You have added ${response.name} to the phonebook`)
          console.log(`you have added ${response.number}to the phonebook`)
        mongoose.connection.close()  //When object have been added into database. "Mongoose.connection.close()" will close connection to database without this program executing will not ever stop. 

      })
    }



// After we have been connected to mongoose, we define notes/persons schema and model 





