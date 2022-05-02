const express = require("express") // We initialize variables "express", which have to use express library.


const app  = express() // We initalize variables, which purpose is to create express application.

// Creates an Express application. The express() function is top level function exported by express module. 




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
  response.json(persons) // We are answering to request  with response variables and express moves it automatically to json.mode
})



 

 // We initalize variable "maxValue", which uses "Math.max" function, that can we use this we have to create copy of that table, then it can apply all values, where is "id" name object and then it return highest value "maxValue" to user.

  const maxValue = Math.max(...persons.map(findId => findId.id))
  const showValue = `<h1>There is total of ${maxValue} different persons inside info!</h1>` // We initalize variable "showValue", which is equal as that text. There is also "maxValue" inside that text.

  
  var  today = new Date(); // We initalize variable "today", which is equal as new Date();,  

  var date = today.toGMTString();  // We initalize variable "date"   and method "today.toGTMString() convert date to GMT (Greenwich mean time)" Using the o

  console.log(date) // This "console.log(date). This print "date" to visible in console and terminal =>  ("Friday, 29 Apr 2022 09:36:32 GMT")




app.get('/api/info', (request, response) => { // When user try to site "http:localhost:3000/api/info", then it always return it back to with answer to user with variables "response" 
  response.send(`<h2>There is total  of ${maxValue} different persons in info! <br><br>${today}(Greenwich mean time)</h2>`) // we determine application (event handler), which purpose is to get application => "/api/info" becoming  "HTTP" request.   
  console.log(maxValue) // This "console.log(maxValue)" prints that value "maxValue" to visible to the terminal. 
  console.log(showValue)
  console.log(today) // This "console.log(today)" prints that value "today" to visible to the  terminal.   
  response.json(persons)  // We are answering to "request" with response variables and express moves it automatically  to json.mode 
})


// When user try to site "http:localhost:3000/api/persons/id:", which purpose is to handle all "HTTP get request, which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
app.get('/api/persons/:id', (request, response) => { 
  const ID =  Number(request.params.id) // We initalize variable "ID", which is equal as "Number('')" function. We are using "request.params.id") that we can get into parameters id with "request.params.id", So When user trying to go site => "http://localhost:3000/api/persons/2" it apply that id object value and return it in answer to under "ID"
  const person = persons.find(person => person.id=== ID)  // We initalize variable "person", which apply "persons" value and its "id" object is equal as "ID"  

  if(person) { // We are using "if()" function to if "persons" request will work, then => "http://localhost:3000/api/persons/2" it return  "persons" variables value back to visible for user in Json.mode
    response.json(person)   // "reponse.json()" return that variables value  in json.mode.
    console.log(person) // We are using "console.log(person)", which print that value to visible to the terminal 
  }else{
    response.status(404).end() // if  user try to go site => http//:localhost:3000/api/persons", which id value is not found and function is not going to happen, then it return request with "statuscode(404)
    console.log(person)  // We are using "console.log(person)", which print that value visible to the terminal 
  }
    
  })  // When user trying to go site "http:localhost:3000/api/persons/id:", which purpose is to handle  "HTTP delete request", which are mode "api/persons" > id[1,2,3,4,5], then it return answer back to user. 
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







    
  



const PORT = 3000   // We initalize variable "Port", which is same as port number "3000"
app.listen(PORT, () => { // If we Would not be used this, then it there is nothing visible in terminal. 
    console.log(`server running on port${PORT}`) // It print that text to terminal, When we run program. 
}) 



