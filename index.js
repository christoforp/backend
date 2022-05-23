require('dotenv').config()  // We are taking  environment variables of 'dotenv' file into account  with  command "require('dotenv).config()and define same way as we using another environment variables => process.env.MONGODB_URI. 
// It is also important that we take "dotenv" into account before  import model "Person", because then we make sure that initialized environment variables in file is initalized when we import modules code.


const  express = require("express") // We initialize variables "express", which have to use express library.
const morgan = require('morgan') // We initalize variable "morgan", which have to use "morgan" "middleware" library. 
const cors = require("cors") // We initalize variable "cors", which have to use "cors" middlware library 
const app  = express() // We initalize variables, which purpose is to create express application.
const Person =  require('./models/person') // We initalize variable "Person" and taking its model into account with "require('./models/persons.js)"




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
  Person.find({}).then(persons =>{ // It apply all values from database and return it back to user. 
  response.json(persons) // We are answering to request  with response variables and express moves it automatically to json.mode
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
  Person.find({}).then(persons => { // It apply all values from database and return it back to user
  response.send(`<h2>There is total  of ${maxId} different persons in info! <br><br>${today}(Greenwich mean time)</h2>`) // we determine application (event handler), which purpose is to get application => "/api/info" becoming  "HTTP" request.   
  console.log(maxId) // This "console.log(maxValue)" prints that value "maxValue" to visible to the terminal. 
  console.log(showId)
  console.log(today) // This "console.log(today)" prints that value "today" to visible to the  terminal.   
  response.json(persons)  // We are answering to "request" with response variables and express moves it automatically  to json.mode 
  // Then we are answering "HTTP" request with list object with JSON method As result there is now found variables "persons"  returned object of MongoDB in table because We are answering request with JSON method.

})

})



// When user try to site "http:localhost:3000/api/persons/id:", which purpose is to handle all "HTTP get request, which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
app.get('/api/persons/:id', (request, response) => { // When user trying to go site "http://localhost:3001/api/2", then "params.id" variable is equal as 2
  Person.findById(request.params.id).then(person=> { // We changes independent persons review  to mode => "Person.findById().then({})"
  

    response.json(person)
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


app.use(express.json()) // We are using "app.use(express.json())", that we can get into data, which has been coming from request. If we don't use this, then  body value would be undeterminant and it would be seen error in (Postman and terminal), When user trying to add new values to "persons" table. ('./api/persons') 
     // "Json" parser purpose is to take request with  "raw" data and change it to javascript creature  and then it invest it  => request.body. 


// When user trying to go site "http://localhost:3000/api/persons", which purpose is to handle all HTTP POST request.
  app.post('/api/persons', (request,response) => { // We determine (event handler), which purpose is to get application to mode ""./api/persons" becoming HTTP request.
    // When are adding something in Postman, then we are choosing => body and we choose raw mode and we have to make sure it is in Json.mode
    // This means that when values are adding to => POST "http://localhost:3000/api/persons", then variable request saves it data with (request.body) receives data and those current data will initalize back to  "getId" variable. 
    const getId= request.body  // We initialize variable "getId", which is equal as request.body
  
    if(!getId.name || !getId.number === undefined) { // We are using "if()" function if "getId.name" or "getId.number" values is empty, so if there is missing something, When we trying to add a new values to table as result we are return things inside of {...}. 
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


  

      // We initalize variable "person",which utilize Person{...} function, So it means that that we have been created separated module for "Person"
      // We initalize variable "person ", where we adding three different object  => ["id","name","number"], which is seen "let persons"
     const person = Person({  // There is seen "new mongoose.Schema" inside of That "Person" module , which purpose is to define what mode we save them into database.
       // "id" values generetalogic is determined to inside of "generateId()" function 
       id: generateId(), // We are creating "id" object, which include that "generateId()" function current value
       name: getId.name, // So "name" => String,  variables "get.id.name" changes to under persons collection => persons.name
       number: getId.number,  // "number" => String, variable "get.id.number" changes to under persons collection => persons.number
       
      })



      // We creating persons object with  createdata construction function 
      // We answering  request  with save operation  inside  of callback function, For this we make sure that only if operation will success.
      person.save().then(savedperson=> {  //  callback functions parameter "savedperson", which is saved persons  
        response.json(savedperson) // "response.json" purpose is to answer and return that () in json.mode 
        console.log(savedperson) // "console.log()" purpose is to print that variables values back to user
        // Even Though we answering Http request with "Json"formed mode 

      })

     

  })

  



    
    // When user trying to go site "http:localhost/api/persons/id:", which purpose is to handle  "HTTP delete request", which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
  app.delete('/api/persons/:id', (request, response) => {      // we determine application (event handler), which purpose is to get application => "/api/persons/:id" becoming  "HTTP" request.
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

    }
  )











const PORT =  process.env.PORT     // We initalize variable "Port", which is same as port number "3000"
                                         // "process.env.PORT" now we have been determinant PORT OF inside environment variable, whereas environment variable PORT Is not defined. "Heroku" configure application port with environment variable.
                                
app.listen(PORT, () => { // If we Would not be used this, then it there is nothing visible in terminal. 
    console.log(`server running on port${PORT}`) // It print that text to terminal, When we run program. 
}) 



