/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
require('dotenv').config()
const Person =  require('./models/person')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app  = express()
app.use(morgan(':method : url :status :res[content-length]- :response-time ms :PostPerson'))
morgan.token('PostPerson', function (request){
  return JSON.stringify(request.body)
})
app.use(cors())
app.use(express.static('build'))

app.get('/api/info', (request, response, next) => {
  Person.find({}).then(Person => {
    var  today = new Date()
    var date = today.toGMTString()
    const Persons = Person.length
    response.send(`<h2>There is total  of ${Persons} different persons in info! <br><br>${date}(Greenwich mean time)</h2>`)
    console.log(today)
    console.log(Persons)
    console.log('Different persons have been listed on the phonebook')
    response.json(Persons)
  })
    .catch(error => next(error))
})
app.get('/api/persons', (request,response, next ) => {
  Person.find({}).then((ShowPerson) => {
    response.json(ShowPerson)
    console.log(ShowPerson)
    response.status(404).end()
  }).catch(error =>
    next(error))
})


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if(person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(error => next(error))
})

app.use(express.json())
app.post('/api/persons', (request,response, next) => {
  const getValue= request.body

  const person = new Person({
    name: getValue.name,
    number: getValue.number
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
    console.log(savedPerson)
  }) .catch(error =>
    next(error))
})
app.put('./api/persons/:id', (request, response,next) => {
  const { name,number } = request.body
  const getValue= request.body
  const  person = {
    name: getValue.name,
    number: getValue.number
  }
  Person.findByIdAndUpdate(request.params.id,  person ,  { name, number },  { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
      console.log(updatedPerson)
    })
    .catch(error => next(error))
})
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id).then(() => {
    response.status(204).end()
  }) .catch(error  =>
    next(error))
  response.status(404).end()
})

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  console.log(error.name)
  if(error.name=== 'CastError'){
    console.log()
    return response.status(400).send({ error: 'Malformatted id' })
  }else if(error.name ==='ValidationError'){
    return response.status(400).json({ error:error.message })
  }
  next(error)
}
app.use(errorHandler)
const PORT =  process.env.PORT
app.listen(PORT, () => {
  console.log(`server running on port${PORT}`)
})