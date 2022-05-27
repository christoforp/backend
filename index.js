require('dotenv').config()  // We are taking  environment variables of 'dotenv' file into account  with  command "require('dotenv).config()and define same way as we using another environment variables => process.env.MONGODB_URI. 
// It is also important that we take "dotenv" into account before  import model "Person", because then we make sure that initialized environment variables in file is initalized when we import modules code.


const express = require("express") // We initialize variables "express", which have to use express library.
const morgan = require('morgan') // We initalize variable "morgan", which have to use "morgan" "middleware" library. 
const cors = require("cors") // We initalize variable "cors", which have to use "cors" middlware library 
const app  = express() // We initalize variables, which purpose is to create express application.
const Person =  require('./models/person') // We initalize variable "Person" and taking its model into account with "require('./models/persons.js)"
const person = require('./models/person')





// Thus that "Person" variable get same value as  what module define. 
 



 // We are using "app.use(morgan()", which logger console  in accordance with  "tiny confirugration" 
             // in practically this means that, always when application  conduct  a new HTTP request, for example (adding a new persons  value to a table)
             // "middleware" morgan can have acces to HTTP request and erros, Therefore, when application conduct a new HTTP request  terminal prints => POST, /api/persons 12.771 ms, POST /api/persons 200 58 -12.771 ms so method => (':method :url: status: res[content.lenght] -response-time ms) 
            // We are using "app.use(morgan())", where are taking "morgan" middleware into account with "use" method and  we are  also creating a new logger with  format string of predefined token. This will use its build "method",  identify "url" "status" res:[content-length] "response time in ms". 
             
            app.use(morgan(":method : url :status :res[content-length]- :response-time ms :Post"))
              
            // We initalize "morgan.token()" and define with that method with name and callback function. This callback function is expected to return string value. 
            // morgan will run "callback" function as each  times, when console occurs using the token.
            // In this case token get value => "Post", (So user can use whatever wants to)
            // That variable value "Post " is r eplaced to end   inside of  => "app.use(morgan)())"  function.
            // Always application conduct "Http" request x, then it print also this  data inside of "request.body" to the terminal with "JSON.mode" 
            // If this "request.body" is empty, then it only print {""} string to terminal.
            // tokens in morgan is identified ":" symbol. "morgan" allows you create your own token with "morgan.token()" method.
             morgan.token("Post", function (request, response){
              return JSON.stringify(request.body)   // We are using return "JSON.stringify()" method, which purpose is to convert javascript value to JSON Mode.
              //If value have JSON method, then it is responsible to define what data has been searilized.
            
             })

             app.use(express.json()) // We are using "app.use(express.json())", that we can get into data, which has been coming from request. If we don't use this, then  body value would be undeterminant and it would be seen error in (Postman and terminal), When user trying to add new values to "persons" table. ('./api/persons') 
     // "Json" parser purpose is to take request with  "raw" data and change it to javascript creature  and then it invest it  => request.body. 

 // We taking "requestLogger" Middleware function into accout, which have three parameters => ["res, req, next"]
 // "next()"  function purpose is to move that "errorhandling" to express "errorhandling" middleware or without parameter it moves to next route or middleware 
const requestLogger = (request, response , next) => {
  console.log('Method: ', request.method) // Print that "Method" and request.method =>  Method: Get
  console.log('Body: ', request.body) // Print that "Body" and request.body => Body:
  console.log('Path: ' , request.path)  // Print that "Path" and request.path => 
  console.log('---')
  next() //  => "Next()" function  purpose is to move that to  move control for next route or middleware
}
 
 
     app.use(requestLogger) // We taking "requestLogger" into account because "request.body" is empty => "app.use(requestLogger)"
                            // Note that "app.use(express.json())" should have been taken into account before this, because "request.body" is empty. 




 // We initalize variables, which purpose is to create express application.

// Creates an Express application. The express() function is top level function exported by express module. 


app.use(cors()) // We initalize "middleware" cors, which purpose is to allow request from all origin to express route
// We are using this because in javascript, because our server source is in http://localhost:3001/api/persons and frontend is in "http://localhost:3000" , so its origin is not same.
// in our situation javascript code can communicate only with same origin server.
// "app.use()" cors purpose is allow request from another origins.

// We initialize "middleware express static" using "app.use())", where we creating "static" which is build in inside of express. 
//Its purpose is to first find if  "request path " have  any similar file inside of that build folder at same time while it doing HTTP "request". If there is any similar data, then it return that "express" file. 
app.use(express.static('build')) // Now HTTP request goes to address => GET request  "https://calm-dusk-98996.herokuapp.com/api/persons" of backend  or  "https://calm-dusk-98996.herokuapp.com"", which shows "Frond end" done by React.  
                                 // Get reqeust to address => "https://calm-dusk-98996.herokuapp.com/api/persons", which handle backend code. 



                        
    
let persons = [ // We initalized variables to, where we adding 5 different values (array). There is a three different object all of that values

{
  id: 1,
  name: "Arto Hellas" ,
  number: "040-123456"
},
{
  id: 2,
  name: "Ada Lovelace",
  number: "39-44-5323523"
},
{
  id: 3,
  name: "Dan Abramov",
  number: "12-43-234345"
},
{
  id: 4,
  name: "Mary Poppendieck",
  number: "39-23-6423122",
  
  id: 5,
  name: "Christofor Pavlidi", 
  number: "040-4659788", 
}
]


















app.get('/api/persons', (request, response) => { // We determine application (event handler), which purpose is to get application to => "/api/persons"
  Person.find({}).then(person =>{ // It apply all values from database and return it back to user. 
  response.json(person) // We are answering to request  with response variables and express moves it automatically to json.mode
    // Then we are answering "HTTP" request with list object with JSON method As result there is now found variables "persons"  returned object of MongoDB in table because We are answering request with JSON method.


})
})












 

 // We initalize variable "maxValue", which uses "Math.max" function, that can we use this we have to create copy of that table, then it can apply all values, where is "id" name object and then it return highest value "maxValue" to user.

  const maxId= Math.max(...persons.map(findId => findId.id))
  const showId = `<h1>There is total of ${maxId} different persons inside info!</h1>` // We initalize variable "showValue", which is equal as that text. There is also "maxValue" inside that text.

  
  var  today = new Date(); // We initalize variable "today", which is equal as new Date();,  

  var date = today.toGMTString();  // We initalize variable "date"   and method "today.toGTMString() convert date to GMT (Greenwich mean time)" Using the o

  console.log(date) // This "console.log(date). This print "date" to visible in console and terminal =>  ("Friday, 29 Apr 2022 09:36:32 GMT")




app.get('/api/info', (request, response) => { // When user try to site "http:localhost:3000/api/info", then it always return it back to with answer to user with variables "response" 
  Person.find({}).then(person => { // It apply all values from database and return it back to user
  response.send(`<h2>There is total  of ${maxId} different persons in info! <br><br>${today}(Greenwich mean time)</h2>`) // we determine application (event handler), which purpose is to get application => "/api/info" becoming  "HTTP" request.   
  console.log(maxId) // This "console.log(maxValue)" prints that value "maxValue" to visible to the terminal. 
  console.log(showId)
  console.log(today) // This "console.log(today)" prints that value "today" to visible to the  terminal.   
  response.json(person)  // We are answering to "request" with response variables and express moves it automatically  to json.mode 
  // Then we are answering "HTTP" request with list object with JSON method As result there is now found variables "persons"  returned object of MongoDB in table because We are answering request with JSON method.

})




// When user try to site "http:localhost:3000/api/persons/id:", which purpose is to handle all "HTTP get request, which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
app.get('/api/persons/:id', (request, response, next) => { // When user trying to go site "http://localhost:3001/api/2", then "params.id" variable is equal as 2
  Person.findById(request.params.id).then(person=> {                                            // We changes independent persons review  to mode => "Person.findById().then({})"
  // When "findById"  method get wrong id value of its argunment it throws error as result it goes rejected mode  then we using callback function of catch block => ".catch(error) => { console.log(error) res.status().send({})}"
  
    if(person) {
    response.json(person)
  }else{ // Whereas there is no found  any desired object in base, then variables value is "null" and it conduct that things }else{ 

    response.status(404).end() // We answering request with HTTP statuscode "(404)" not found
  }
}) 


// We creating event handler ".catch(error => next(error))", which purpose is to move "errorhandler" to  forward with "next"() function 
// As we seen in "app.get('./", () next is added to "eventhandler" for  third parameter 
.catch(error => 
    next(error))
     // If "next()" function is called by parameter, then it continue its execution to "errorhandler" middleware.
       //  whereas we using just  "next()"" it  going to execute  next route or middlevare 

     // Whereas returning promise  of "findById" goes into rejected mode, then we answering request with HTTP "statuscode(500) internal error" => "response.status(500).end()"
})


 



  const ID =  Number(request.params.id) // We initalize variable "ID", which is equal as "Number('')" function. We are using "request.params.id") that we can get into parameters id with "request.params.id", So When user trying to go site => "http://localhost:3000/api/persons/2" it apply that id object value and return it in answer to under "ID"
  const person = persons.find(person => person.id=== ID)  // We initalize variable "person", which apply "persons" value and its "id" object is equal as "ID"  

  if(person) { // We are using "if()" function to if "persons" request will work, then => "http://localhost:3000/api/persons/2" it return  "persons" variables value back to visible for user in Json.mode
    response.json(person)   // "reponse.json()" return that variables value  in json.mode.
    console.log(person) // We are using "console.log(person)", which print that value to visible to the terminal 
  }else{
    response.status(404).end() // if  user try to go site => http//:localhost:3000/api/persons", which id value is not found and function is not going to happen, then it return request with "statuscode(404)
    console.log(person)  // We are using "console.log(person)", which print that value visible to the terminal 
  }
})

// We initalize and using "generateId" function, which are conduct (..) things inside that function, when use trying to add new values to  "persons" table. ('./api/persons') 
const generateId= () => {  // id" values generatinglogic is determined to inside of "generateId()" function
  const minId = persons.length +1  // We initalize variable "minId", which is equal as "persons.length +1", So First we calculate how many different values is found in that "persons" that table, then it add +1. 
  console.log(`Minimum Id is now: ${minId}`) // "console.log()" print that text to terminal and at the same time it shows that "minId" current Id
  const maxId = minId +1  // We initalize variable "maxId", which is equal as  "minId +1", so First we take that "minId" current id then it add +1   
  console.log(`Maximum Id  is now:${maxId}`) // "console.log()" print that text to terminal and at the same time it shows that "maxId"   current Id 
  const someId = Math.floor(Math.random()*(maxId- minId) + minId) // We initalize variable "someId", which calculate that function  => "Math.random()" and gives values X between [0,1] in desimal mode. function "Math.floor()" return highest number, which is smaller or bigger than given number.
  console.log(`Some Id is ${someId}, which will be inserted into id object`)            // "console.log()" print that text to terminal and at the same time it shows that "someId" variables current value. 
  return someId+1  // "return someId"  return that "randomValue" variables value => "newId"
}



// When user trying to go site "http://localhost:3000/api/persons", which purpose is to handle all HTTP POST request.
  app.post('/api/persons', (request,response) => { // We determine (event handler), which purpose is to get application to mode ""./api/persons" becoming HTTP request.
    // When are adding something in Postman, then we are choosing => body and we choose raw mode and we have to make sure it is in Json.mode
    // This means that when values are adding to => POST "http://localhost:3000/api/persons", then variable request saves it data with (request.body) receives data and those current data will initalize back to  "getId" variable. 
    const getId= request.body  // We initialize variable "getId", which is equal as request.body
  
    if(!getId.name || !getId.number ===undefined) { // We are using "if()" function if "getId.name" or "getId.number" values is empty, so if there is missing something, When we trying to add a new values to table as result we are return things inside of {...}. 
      console.log('No empty values. Please add either name or number and try again!:)') // "console.log()" Print that text to visible terminal.
                                                         // It print that value and shows Content-type in Postman or RestClient. This  also help to solve "Content-type header" problem, if it missing. 
       return response.status(400).json({ // We are using "response.status(204).json" to if there is any missing data, then we answer request with statuscode(400) bad request which also print that text to the terminal.
        errorMessage: "Some content is missing" // Object name is "error", which include that text, this is seen with Postman .

      })  

    }


     // We initalize variable "lookpersons", which uses "persons.find()" function table", where it apply all "persons.name" values and  compare them if they will fit with  "get.Id.name" variables. 
    const lookpersons = persons.some(findPerson => findPerson.name === getId.name) // Whereas  this will implement, so  it return it value "true", whereas it doesen't happen then it return value "false"
   console.log(`Looking if persons find has currently exiting name, which you are trying to add. Result is => ${lookpersons}`) // "console.log()" print that text to terminal and at the same time it shows "lookpersons" current values , which can be also  (true or false)

  if(lookpersons === true) { // We are using "if()" function if "lookpersons" is get value true so => if( "lookpersons" === true), then it return things inside of {...}
    console.log('You tried add persons, which is already exist in the phonebook!. Please try again:)') // "console.log()" print that text to terminal
  
    return response.status(400).json({ // We are using return "response.status()", which return an error with statuscode(400) "bad request",   if there is any missing content 
    errorMessage: "Name must be unique, Please try again!:)"  // it also print that text to the terminal. 
  
  
  
  })
}


const ID = Number(request.params.id) // We initalize variable "ID", Which is also found in "app.get('/api/persons/:id") section. It is equal as "Number('') function. We are using "request.params.id", which purpose is to get into parameters id with "request.params.id", So when user trying to go site => "http://localhost:3000/api/persons/1"  it apply that id object value and return it in answer to under  "ID" variable.
    console.log("Next it print persons variables values before deleting.") // It print that text visible to terminal.
    console.log(persons) // We are using "console.log(persons)", which print that value to visible to the terminal.
    persons = persons.filter(person => person.id !== ID) // We filtered that  table, which is inside of that "persons" variable that remains only those value, which are false with "ID"
    console.log("Next it print person variables values after deleting to terminal.") // It print that text visible to terminal. 
    console.log(persons) // We are using "console.log(persons)", which print that value to visible to terminal.
    
    if(persons) {  // We are using "if()" function to if "persons" request will work then => "http://localhost:3000/api/persons/2" it return "persons" variables values back to visible for user in json.mode 

      response.json(persons) // "response.json(persons) return that variables value in to json.mode"
      console.log(persons) // We are using console.log(persons), which print that value to visible to the terminal 
    }else{
     response.status(204).end()  // if  user try to go site => http//:localhost:3000/api/persons", which id value is not found and function is not going to happen, then it return request with "statuscode(404)
    }


    


  

      // We initalize variable "person",which utilize Person{...} function, So it means that that we have been created separated module for "Person"
      // We initalize variable "person ", where we adding three different object  => ["id","name","number"], which is seen "let persons"
     const person = Person({  // There is seen "new mongoose.Schema" inside of That "Person" module , which purpose is to define what mode we save them into database.
       // "id" values generetalogic is determined to inside of "generateId()" function 
       id: generateId(), // We are creating "id" object, which include that "generateId()" function current value
       name: getId.name, // So "name" => String,  variables "get.id.name" changes to under persons collection => persons.name
       number: getId.number,  // "number" => String, variable "get.id.number" changes to under persons collection => persons.number
       
      })



      // We creating persons object with  "Person" construction function they are like as Javascript object, So they have combination of method that they can save object into database.
      // We answering  request  with save operation  inside  of callback function, For this we make sure that only if operation will success.
      person.save().then(savedperson=> {  //  callback functions parameter "savedperson", which is saved persons  
        response.json(savedperson) // "response.json" purpose is to answer and return that () in json.mode 
        console.log(savedperson) // "console.log()" purpose is to print that variables values back to user
        // Even Though we answering HTTP request with "Json"formed mode 

      })

     

  })



  

    
  

  // When user trying to go site "http:localhost/api/persons/id:", which purpose is to handle  "HTTP delete request", which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
  app.delete('/api/persons/:id', (request, response, next) => { // We determine application (event handler), which purpose is to get application => "/api/persons/:id" becoming  "HTTP" request.
    Person.findByIdAndRemove(request.params.id).then(result  => {   
    // If user want to delete person, which "id"  (2), then "request.params.id" get value 2 
    //  Answer of both cases is 204 No Content So if => "persons" object removing happens remove  if object is remover or  is not found any object even Id would been  right. 
      response.status(204).end() // We can check if that resource was actually deleted in base with  "callback" function .then(result) and we can also return response with other statuscode if that it is necessary. 
    })
      // We answering HTTP "request" with statuscode(204). "No content"
      .catch(error  => { // Whereas there is coming problem when deleting, So promise is end up to (rejected), Then we conduct things inside of that {...} function 
       next(error)         
     

     // Returning with response variable "400" bad request and same time that reason and text. 

      })
    }
  )



  


  // When user trying to go site => "Http://localhost:3001/api/persons", which purpose is to replace  and modifying independent resurs data. 
                                                         // We determine "event handler" for application, which purpose is to PUT becoming HTTP request.                              
app.put('./api/persons/:id', (request, response,next) => {

  const getId = request.body //  We initialize variable "getId", which  is equal as  "request.body"
    // We initalize variable "person",which utilize Person{...} function, So it means that that we have been created separated module for "Person"
      // We initalize variable "person ", where we adding three different object  => ["name, "number"], which is seen "let persons"
    const  updatePerson = {
      name: getId.name, // So name => String, "get.id.name" variables move into persons collection => persons.name
      number: getId.number // So number => String, "get.id.number" variables move into persons collection => persons.number

    }



    // Phonebook information updating can permit phonebooks information change of importance 
    // "persons" updater "findByIdAndUpdate"  can permit persons change of importance. 
    // eventhandler get also parameters orginal UpdatePerson  Updated object before change in the status quo
    // We had also been adding  parameter "{new: true}", that we get changes variables object back to the caller.
      
Person.findByIdAndUpdate(request.params.id, updatePerson, {new: true})  // Notice that "Persons.findByIdAndUpdate" parameter should be normal "javascript" object not construction function "Person", what have been created a new persons. 
  // Notice that "Persons.findByIdAndUpdate" parameter should be normal "javascript" object not construction function "Person", what have been created a new persons. 

  .then(updatedPerson => {
    response.json(updatedPerson)  // return  data inside of "updatedPerson" variable  with json mode 
    console.log(updatedPerson) // Print that "updatedPerson" variables value back to the terminal 
  })

  .catch(error =>  
    // We are creating "errorhandler" => ".catch(error => next())", which purpose is to move that "errorhandler" into next function 
         // if " next()  function is called by parameters, then it continue its execution or condcution in express errorhandler middleware
                        // If "next()"   function is called without parameters, then it going to move it to next route or middleware. 
    next(error))
  })
  




  





// We creating " function "errorhandlermiddleware", which get four parameters => [error, request, response, next]
const errorhandler = (error, request, response,next) => { // "errorhandler" checks if its purpose is  typical error like "Cast error", whereas it is then it response request with response object. 
  // Whereas it is not then it moves  handling of "Next()" function to  for express existent middleware
  console.log(error.message) // Print that "error.message"  and its text in terminal&console. So if we trying to delete "persons" from database what is not found in database, then it print that => --- Cast to ObjectId failed for value "5" (type string) at path "_id" for model "persons" CastError error happened.  Please check error and try again!:) 
  console.log(error.name) // Print that "error.name" value visible for terminal with this we can decide what if condition we are going to use that value and with that we can print that text to terminal.

  if(error.name=== 'CastError'){ // "errorhandler" check if its typical as "CastError" if it then answer request with respons.status(). 
    console.log("error happened.  Please check error and try again!:)")  // It print that text visible terminal and response status 404 Not Found and error message, which is seen also Postman or browser.
    return response.status(400).send({errorMessage: 'Malformatted id'})
             // We are also adding separate answer of error reason => ({error: 'malformatted id'})

  }

  next(error) // "middleware" function "next()" is called with parameter, then it continue its execution in "errorhandler" "middleware" and print that error visible in terminal
  // If "next()" middleware function is called without parameter then it move its execution to another route or middleware.

  
}


// We taking "errorhandler" middleware function into account with => "app.use(errorhandler)" 
// Notice that "app.use(errorhandler)" should have been taken account after other middlewares.
app.use(errorhandler)





const PORT =  process.env.PORT     // We initalize variable "Port", which is same as port number "3000"
                                         // "process.env.PORT" now we have been determinant PORT OF inside environment variable, whereas environment variable PORT Is not defined. "Heroku" configure application port with environment variable.
                                
app.listen(PORT, () => { // If we Would not be used this, then it there is nothing visible in terminal. 
    console.log(`server running on port${PORT}`) // It print that text to terminal, When we run program. 
}) 



