const express = require("express") // We initialize variables "express", which have to use express library.

const app  = express() // We initalize variables, which purpose is to create express application.

// Creates an Express application. The express() function is top level function exported by express module. 


let persons = [ // We initalized variables to, where we adding four different values (array). There is a three different object all of that values
    {
        "persons": [
          {
            
            "name": "Arto Hellas",
            "number": "040-123456",
      
            "id": 1
          },
          
          {
            "name": "Ada Lovelace",
      
            "number": "39-44-5323523",
            "id": 2
          },
          {
            "name": "Christofor  Pavlidi",
            "phonenumber": "",
            "date": "2022-04-20T13:39:33.699Z",
            "important": true,
            "id": 7
          },
          {
            "name": "Ela",
            "phonenumber": "+1224423",
            "date": "2022-04-23T11:59:29.791Z",
            "important": true,
            "id": 6
          },
          {
            "name": "Chr2",
            "phonenumber": "",
            "date": "2022-04-25T11:10:38.856Z",
            "important": true,
            "id": 5
          }
        ]
      }
]




 // Variables "persons" data is displaced to site => http:localhost:3000/api/notes'
app.get('/api/persons', (request, response) => { // We determine application (event handler), which purpose is to get application to => "/api/notes"
    response.json(persons) // We are answering to request  with response variables and express moves it automatically to json.mode
})

 // We initalize variable "maxValue", which uses "Math.max" function, that can we use this we have to create copy of that table, then it can apply all values, where is "id" name object and then it return highest value "maxValue" to user.

  const maxValue = Math.max(...persons.map(findId => findId.id))
  const showValue = `<h1>There is total of ${maxValue} different persons inside info!</h1>` // We initalize variable "showValue", which is equal as that text. There is also "maxValue" inside that text.

  
  var  today = new Date(); // We initalize variable "today", which is equal as new Date();,  

  var date = today.toGMTString();  // We initalize variable str  and method "today.toGTMString() convert date to GMT (Greenwich mean time)" Using the o

  console.log(date) // This "console.log(date). This print date to visible in console and terminal =>  ("Friday, 29 Apr 2022 09:36:32 GMT")




app.get('/api/info', (request, response) => { // When user try to site "http:localhost:3000/api/info", then it always return it back to with answer to user with variables "response" 
  response.send(`<h2>There is total  of ${maxValue} different persons in info! <br><br>${today}(Greenwich mean time)</h2>`) // we determine application (event handler), which purpose is to get application => "/api/info" becoming  "HTTP" request.   
  console.log(maxValue) // This "console.log(maxValue)" prints that value "maxValue" to visible to the terminal. 
  console.log(showValue)
  console.log(today) // This "console.log(today)" prints that value "today" to visible to the  terminal.   
  response.json(persons)  // We are answering to "request" with response variables anx express moves it automatically  to json.mode 
})


const PORT = 3000   // We initalize variable "Port", which is same as port number "3000"
app.listen(PORT, () => { // If we Would not be used this, then it there is nothing visible in terminal. 
    console.log(`server running on port${PORT}`) // It print that text to terminal, When we run program. 
}) 



