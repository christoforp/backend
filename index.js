const express = require("express") // We initialize variables "express", which have to use express library.

const app  = express() // We initalize variables, which purpose is to create express application.

// Creates an Express application. The express() function is top level function exported by express module. 


let notes = [ // We initalized variables to, where we adding four different values (array). There is a three different object all of that values
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
app.get('/api/notes', (request, response) => { // We determine application (event handler), which purpose is to get application to => "/api/notes"
    response.json(notes) // We are answering to request  with response variables and express moves it automatically to json.mode
})



const PORT = 3000   // We initalize variable "Port", which is same as port number "3000"
app.listen(PORT, () => { // If we Would not be used this, then it there is nothing visible in terminal. 
    console.log(`server running on port${PORT}`) // It print that text to terminal, When we run program. 
}) 



