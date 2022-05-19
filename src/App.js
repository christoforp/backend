



import React, { useState, useEffect } from 'react'
import PersonsComponent from './components/Persons'
import axios  from 'axios'

import notesService from './services/notesService.js'



const InputFilterComponent   = (props) => {
  return(
    <div>
      <input value={props.Valueprops}
      onChange={props.nameChangeProps}
      placeholder={props.placeholderProps} />
      </div>
  
  )
}



const InputFormComponent = (props) => {
  return(
    <form onSubmit={props.onSubmitProps}>
      <div>
        <input value={props.nameValue}
        onChange={props.nameChange}
        placeholder={props.namePlaceHolder} /> 
      </div>
      <div>
        <input value={props.numberValue}
        onChange={props.numberChange}
        placeholder={props.numberPlaceHolder} />
      </div>
      <button type={props.typeprops}>Add</button>

    </form>
  

  )
}

// We are creating component "Notification", where we adding  one (1) variable => "message" using to inside that component.
// There is seen <Notification message={errormessage} /> as we see this variables is equal with x component.
// if there would not be  put this variables => const "Notfication "  = ()  => {}, then that component will not work. 
//  
const Notification = ({ message, checkError}) => {  // If variables "message" => {errormessage} is false with "null", then nothing is not rendered to user. 
  if(message   === null) { // if variables "message" => {errormessage } is  same value with "null", then nothing will not render to user.
  return null // 
}

 // if variables "message" => {errrormessage } is false  with value "null", and variables "checkError" => {error} is same as  "false", then we render that value

if( message != null & checkError === false) {

 return(
  <div className='error'>{message}</div>  // div element have been used because  this "error", which is found also  => "index.css"

 )
}


 
// if variables "message" => {errrormessage} is true with "null", and variables "checkError" => {error} is same as "true"
else if (message != null & checkError === true) {  
return(
  <div className='success'>{message}</div> // div element is used because this "success" is found also  > index.css file.

)
}
}












const App = () => {
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null) // We initalized variables "errorMessage" stable to, which get values = "null", if we want change that value, then we using function   => setErrorMessage
  const [error, setError] = useState(true) // We initialize "error" stable, which get value "true" and if we want to change stables value, then we use function => setError 

  useEffect(() => {   // we are using  "notesService" modules contest, where is find variables => "const getAllValues" = () => ""           
    notesService
    .getAllValues()  // which means that for first we are current variables fuctions, which return back to data ()
    .then(showResults => {  // variables "showResults" can be also "Christofor" so then(Christofor => ...)
     setPersons(showResults)
     console.log(showResults)  // after this we are changing tables "Persons" stable using setPersons function, which uses values of variables "showResults"
    })
  }, [])








  // (start of effect and  command => axios.get   start to search data from server.)
  
  

    


  



  

  
  const [filterName , setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')


  const inputTextName = "Add new persons name..."
  const inputPhoneNumber = "Add new persons phonenumber..."
  const inputSearchName = "Search new persons name"






  

  


 
  

  


  



  const submitPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phonenumber: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: persons.length + 1,
    
    }
    // whereas user try to add name, which is already in the table/list. Action alert  (if => alert) that name is already added in the list. Use different name
    // whereas user adds name, which is not in the list then it uses  (else => setpersons)= {newname}

    // variable "persons" has two different values in the table, therefore adding  a new to continue previous value using  function name concat() 
    //



      // When user want to add persons name, then it saves "temporarily " data to under "nameObject.name" variables. There is also good to know that "nameObject.name" is same value than "newName"
      // When user want to also add phonenumber besides name, then it saves "temporarily" data to under "nameObject.number". There is also good to know that "nameObject.number" is same value than "newNumber"
    const findCurrentName = persons.find(searchValue => searchValue.Name === nameObject.name) // We initalized variable "findCurrentName", where we find table (array), which "name" object withstands value what user have given so "nameObject.name" or newName
    const changeCurrentName = {...findCurrentName, number: nameObject.number}  // We initalized variable "changeCurrentName", where we doing  copy of variables  "findCurrentName" and we change that object "number" value using given value of user "NameObject.number" or "newNumber"
      // whereas user try to add name, which is already in the table/list. Action alert  (if => alert) person has been already added on the phonebook, replace the old number with a new one!
    // whereas user adds name, which is not in the list then it uses  (else => setpersons)= {newname}

    if(persons.some(personsFind=> personsFind.name === newName)) {
     if(window.confirm(`${nameObject.name}person has been already added on the phonebook ,replace  the old number with a new one!`)) {
       notesService  // We are using variables "notesSevices" module content, where is found variables => "const updateValue" = (id,changeValue) => 
      .updateValue(findCurrentName.id, changeCurrentName) // if findCurrentName.id would be  => "1" then updateValue() function will move adress "http:localhost:3001/persons/1" and there it will update that value, which in this case is newNumber 
      .then(response => {  // When updateValue() function have been conducted, then it saves that id content temporarily to variables "response", so if we would use "console.log(response)" function => .then(...) inside, then we would get updated value in printed to console.
       setPersons(persons.map((results, index) => results.id !== findCurrentName.id ? persons[index]: response)) // We changes "persons" variables table using "map"() function, which creates us to new table (creates a new array). You are also seen that we are using "index" variables inside "map()" function, so if there is four diffeent values in table as result  "index" variables values  could be => [0,1,2,3].
                                                                                                              // if values inside that table => "results.id" is false with variables => "findCurrentName.id", then we are using original values "persons"[index]" if this true, then we are using  "response"  variables values and changint it with current values. 
        setFilterName('')           // Whereas user agree "window.confirm"(alarm), then it changes "filterName" variables to original stable so it clear that variables value.
        setNewName('')        // Whereas user agree "window.confirm"(alarm), then it changes "newName" variables to original stable, so it clear that variables value. 
        setNewNumber('')       // Whereas user agree "Window.confirm"(alarm), then it changes "newnumber" variables to orginal stable, sot it clear that variables value. 
        setError(true)   // We are changing "error" to variables values => "true", but this is not mandatory, because of if persons updating fails, then it changes same value => "false" and after that to => "true". This is used that we can make sure that persons updating  with render will happen correctly for user. 
        setErrorMessage(` you have updated '${nameObject.name}' succesfully  on the phonebook! `)
        setTimeout(() => { 
          setErrorMessage(null)  // We are changing "errormessage " variables values => "null" remember that variables is equal as {message} <=>  inside with "nptification" component 
          
        }, 5000);
      })
      .catch(error => {
        setError(false)
        setErrorMessage(` You have updated'${nameObject.name}' unsuccesfully on the phonebook. Please try again!:) `) // We changes "statusmessage" value to that text. There is also good to take mention that value is same than {message} <=> inside with  "Notification"  variables.
        // We are using "SetTimeout(()" function that we can get to delete that notification with somekind of time, for example  that notification will leave till after 5s(5000 ms)
        setPersons(persons.filter(searchValue => searchValue.name ==! nameObject.name))
        setError(true) // We are changing "error" to variables values => "true", but this is not mandatory, because of if persons updating fails, then it changes same value => "false" and after that to => "true". This is used that we can make sure that persons updating  with render will happen correctly for user
        setTimeout(() => {
          setErrorMessage(null)   // We are changing "errormessage " variables values => "null" remember that variables is equal as {message} <=>  inside with "nptification" component 
          
        },6000)

      })
    }




  }else{
    notesService // We are using information  content from module  "notesService", where is found variables const createValue = (newValue)  => "
    .createValue(nameObject)
    .then(newValue => {
    setPersons(persons.concat((newValue)))
    setFilterName('')
    setNewName('')
    setNewNumber('') 
    setError(true) // We are changing "error" to variables values => "true", but this is not mandatory, because of if persons updating fails, then it changes same value => "false" and after that to => "true". This is used that we can make sure that persons updating  with render will happen correctly for user
    setErrorMessage(`you have added'${nameObject.name}' succesfully  on the phonebook!`)
    setTimeout(() => {
      setErrorMessage(null)  // We are changing "errormessage " variables values => "null" remember that variables is equal as {message} <=>  inside with "nptification" component 
          
      
    }, 5000);
    })

.catch(error => {   // Whereas is coming error, When trying to add new names to phonebook, then program conduct things and render those for visible to user. 
  setError(false) // We are changing "error" variables values => "false". There is also good to know that value is same as {checkError} <=> inside with "notification" component 
    // We changing "statusMessages" values to that text. There is also good to know that this "statusMessage" is same value than {message} <=>  inside with "Notification" variables
    setErrorMessage(`adding   '${nameObject.name}'  was unsuccesfull on the phonebook. Please Try again!:)`)
    setTimeout(() => {  // We are using "SetTimeout(()"" function that we can get delete  notification some kind of time, for example now notification leaves after 5s beacause we have been used },(5000) => so (5000ms)
      setError(true)
      setErrorMessage(null)  // We are changing "errormessage" to variables values => "null", but there have to still remember that value is same as "message" <=>   inside with components of "notification" variables.
      
    }, 6000)
})
  
  }

}

  
  
                                 // We updating  table to using varibles "nameObject" values = [name,number,date,id and important]
                                    // When "createValue()"" function have been conducted, then it saves temporarily data variables  under "nameObject", so if we would be using console.log(newValue) => .then(..) inside, then we will get printed values by users to visible in console.                                  // We changes  variables "persons stable, to using setPersons() function, We are using persons.concat(...) not to  change komponents stable, but creating a new table.
    // When createValue function has conducted, then it saves users values temporarily to under "newValue", so if we would be using to "console.log(newValue)" function .then(...), inside, then we would get given values by users visible in printed to console.
      // when user conduct thsi function (submitPerson), So it cleart that partical function, whereas user don't use this input as result it would be stay like as "hang" in visible 
   // when user  conduct this function (submitPerson), So it clear that partical function, whereas user don't use this input it  would be stay like as "hang" visible 
    // when user conduct  this function (submitPerson), So it return that partical function, whereas user don't use this input it would be stay to  like as "hang" visible 
  
    
  // we are using "notesServices" modules content, which contain variables => "const createValue" newValue => 
      
    
  
          
   // we updating tables using to variables "NameObject" values. We find values => name,number,date,id and important.
     
 //  We changes variables "persons" stable to use "setPersons" function and with function "concat"  we are not changes components stable, but we crearing newTable 
                          
// whereas adding name by user is not found in table, then adding value for in that variables value (nameObject), which is in Json mode                      // There is found data, which name is function .post() in variables "response". That is utilzied and adding "setPersons"  to with among others  phoneinformation. We do not use function 'concat' to change components orginal stable , but we create a new table                               



  // in input (where use wring filterName) value={filterName}, its mean practically that it  => setFilterName {filterName}  saves all what user writing. 
  // console.log(filterName) prints same things and before user writing anythin to input, so => filterName 
  // if user typing value forexample  "Christofor", then function => setFilterName saves its value, So filterName = "Christofor"

const handleFilterNameChange  =(event) => {
  console.log(event.target.value)
  setFilterName(event.target.value)
}


// in input (where user writing new name) value={newName} that mean practically it saves variable value => setNewName {NewName} all what user typing.
// console.log(newName) printing same things and even then when user writing anythin to input, so => newName(')
// for example if user typing value 'Christofor Pavlidi', So then function  => setNewName saves its values so newname = 'Christofor Pavlidi'

const handleNameChange = (event) => {

  console.log(event.target.value)
  setNewName(event.target.value)
}

// in input (where user writing new number) value={newnumber}, its means practically that it  => setNewNumber  {newNumber} all what user writing. 
// console.log(newNumber)  printing same things and before then user writing anything to input, so  => newNumber =''
// when user writing value forexample "123444", then fuction => setNewNumber saves value, so number = "123444" 


const handleNumberChange = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)

}
// We initalized variables "handledeleteName", using for this function that we can get delete button all names of phonebook 
// this button get values that rows tables id, forexample if "persons" variables values is First as result that rows button get same value. 
// This button functionality is implemented components => personsComponent belov from components/Persons.js => (<button value={b.id} onclick={props.deleteValue}>delete</button>})
// button can be  as follows  => <button value="1">delete</button> 
const handleDeleteName = (event)  => {
  const person = parseInt(event.target.value) // We initalize variables button for this we are using "parseInt() function that we can get  rid off  => "..." so  after function  "1" = 1
  const result =  person -1    // We initalize variables getName and calculating  its value using "button" variables  value -1 and  we get answer. 



// When user want to delete users information in table as result windows alert 'are you sure that you wanna leave' if user make sure that he want to delete, so then have to use belove function  
if(window.confirm(`Are you sure that you wanna leave ${persons[result].name} from records?`)) {
  notesService // We are using content of variables, where is find  variables => const delete  = "deleteValue" 
  .deleteValue(event.target.value) // We conduct  deleteValue() function,  so function value can be => .deleteValue(1), for that reason, we have been used parseInt() function, because buttos initial value  => value="1" isn't same thing than just 1. 
  .then(updatedList => {  // When information has deleted from baseUrl, then we changes "persons" variables stable. 
    setPersons(persons.filter(newlist  => newlist.id !==  person )) // We are using "filter() function "", which creates new table (creates  a new array). if  "persons" id= false with variables "buttonID", Then its filtering a current table and replaced to new table, if person ID withstands with variables "button", then it not be changed.  
    setError(true) // We are changing "error" to variables values => "true", but this is not mandatory, because of if persons deleting fails, then it changes same value to => "false" and after that to => "true". We are using this method that we can make sure it updating  persons  with render correctly for user.
    setErrorMessage(`you have deleted'${persons[result].Name}'succcesfully from the phonebook!`)      // We changing "errormessage" values to that text. There is also good to know that this "errormessage" is same value than {message} <=>  inside with "Notification" variables

    setTimeout(() => {     // We are using "setTimeout(() function to that we can delete notification some kind of time, for example now notification leaves after 5s because we have been used }, 5000) so (5000ms)
    setErrorMessage(null)  // We are changing  setErroMessage() variables values ("null"), but we have still remember that variables value is equal as {message} <=> inside with "notification" variables.
    },5000);
  
  
  })

  
  .catch(error => {  // Whereas coming mistakes, when we are trying to delete persons from phonebook, then program conduct () those things, which are inside that and render that to visible for user. 
    setError(false)    // We are changing "error" variables values => "false". There is also good to know that value is same as {checkError} <=> inside with "notification" component
  setErrorMessage( `Deleting'${persons[result].name}' was unsuccesfull from the phonebook records. Please try Again!:) `)
  
    setTimeout(() => {     // We are using "setTimeout(()" function that we can delete notification message some kind of way, for example now message of notification will leave after 6s, because We have been used => setTimeout(() },6000); so (6000ms)

      setError(true)        // We are changing "error" to variables values => "true", but this is not mandatory, because of if persons deleting fails, then it changes same value to => "false" and after that to => "true". We are using this method that we can make sure it updating  persons  with render correctly for user.  
      setErrorMessage(null)      // We are changing "error" to variables values => "null", but there have to still remember that value is same as {message} <=>  inside with  components of "notification"  variables 

    }, 6000);
  })
}
}
     
  



  


  





  

  

  


 // we initialized variables, which get its place, when adding name to input (FormComponent => props). 


// When user ads new information to under the table, it doing function, which is in belove ( submitperson) ja saves information below "nameobject" variables.
// The nameobject variables can be as follows (nameObject[0] => {name,phonenumber,date,important, id} => {}

// there is already two diffrent values in "persons", so we are always adding new values to continue current values,  for this we are using concat() function.
   // When site conduct this fucntion (submitPerson), its clear that table, whereas this not used, then it value will leave hang visible.
  

// in input (where newname has been added) its implement value={newName}, in practically this variables saves (setNewnames =>) and all what user wrting. 



   // console log is printing same things before when user writes anything to input. => newName
   // when user writing value = "Christofor"as a result  function save its value setNewName => then NewName= Christofor 


   return (
     <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} checkError={error}/>
      filter shown with <InputFilterComponent valueProps={filterName}onChangeProps={handleFilterNameChange}placeholderProps={inputSearchName} />
        <h1>Add new information</h1>
        <InputFormComponent onSubmitProps={submitPerson} nameValue={newName}nameChange={handleNameChange}namePlaceHolder={inputTextName}
        numberValue={newNumber}numberChange={handleNumberChange}numberPlaceHolder={inputPhoneNumber} typeprops="submit" />
           <h1>Numbers</h1>
             <PersonsComponent personValue={persons} filterNameValue={filterName}  deleteValue={handleDeleteName} />

          </div> 
             
   
               

   
  
   )
   }
  
   
  
  
export default App






 