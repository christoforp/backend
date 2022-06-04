
import axios  from "axios";

const database= 'api/persons' // That purpose is initalize variables  "database", which use db.json values, which is located in that side.
// We initialize variables "getAllValues", which purpose is to  take values from inside database and with return response.data to return that visible for user. 
// When user open this first time as result for site is rendered information from database with this variables.
const getAllValues =  async () => { 
    const request = axios.get(database)
    return request.then(response => {
        return response.data
    })
     // Variables "database" has initialized in row 2 
     // When function has conducted, So the current data is saved under the "return response.data", that we can use that variables data in side, if this is not used, then result would be error-

}

// We initialize variables "createValue",which purpose is to work then when user want to add new information to database, then we are taking   giving information by user and that replaced to "database" with database  
const createValue = async (newPerson)  => {
    const request = axios.post(database,newPerson) 
    return request.then(response => {
        return response.data 
    })

     // When function has conducted, so the current data is saved under the return responde.data", that we can use that variables data in side.
}
// We initalize variables "createValue", which purpose is to work, when user want to delete information from database, then it will leaves according to id: forever. 
// When user want to update infromation from database, then site conduct that function =>  "updateValue()"

const updateValue = async (id, changePerson) => {
    const request = axios.put(`${database}/${id}`, changePerson)
     const response = await request;
    return response.data;
    
 // When function has conducted, so te current data is saved under the return response.data", that we can use that variables data in side, if this would ne be used then it would be error.

}

// We initialize variables "deleteValue", which purpose  is to work when user want to delete information from database, which leaves with ID forever. 
// There is also a good to mention that buttons "value" determine {id} for example is button value="2" as result this remove user information from  database => "http://localhost:3000/persons/2" forever. 
// When user want to delete information from database, as result side conduct always that function => "deleteValue(...)"
const deleteValue =  async (id) => { // We initalize also "id" variables use inside that function, if this not would be then it would be error. 
    const request = axios.delete(`${database}/${id}`) // Variables "id" has initialized in row 
     const response = await request;
    return response.data;
}
 // When function has conducted, then the current data saved  under "response.data ", that we can use its variables data in side, if this would not be used then it would be error!

// We initalize variables "create", which purpose is to work when user want to create new name or information to database, which happens with nameObject => nameObject.name 
//Then we are taking   giving information by user and that replaced to "database" with database
const create = async (nameObject) => { // When user want to create information to database, then it conduct things inside of that  .create{...} function 
    const request = axios.post(database, nameObject)
    const response = await request;
    return response.data // When function have been conducted, So the current data is saved under the return response.data 
}


export default {getAllValues, createValue, deleteValue, updateValue, create}

// When all these variables and function have been conducted, then we return and export it with "export default", that it could be work in application. 





