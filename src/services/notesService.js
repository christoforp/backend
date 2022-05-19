
import axios  from "axios";

const baseUrl= 'api/persons' // That purpose is initalize variables  "baseUrl", which use db.json values, which is located in that side.
// We initialize variables "getAllValues", which purpose is to  take values from inside baseUrl and with return response.data to return that visible for user. 
// When user open this first time as result for site is rendered information from baseUrl with this variables.
const getAllValues =  async () => { 
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
                                              // Variables "baseUrl" has initialized in row 2 
    
                                              
                     // When function has conducted, so the current data is saved under the "return response.data", that we can use that variables data in side, if this is not used, then result would be error-

}

// We initialize variables "createValue",which purpose is to work then when user want to add newinformation to baseUrl, then we are taking   giving information by user and that replaced to "baseUrl" with baseUrl  
const createValue = async (newValue) => {
    const request = axios.post(baseUrl,newValue) 
    return request.then(response => {
        return response.data 
    })


     // When fucntion has conducted, so the current data is saved under the return responde.data", that we can use that variables data in side.
}

// We initalize variables "createValue", which purpose is to work, when user wanto to delete information from baseUrl, then it will leaves according to id: forever. 
// When user want to update infromation from baseUrl, then site conduct that function =>  "updateValue()"

const updateValue =  async (id, changeValue) => {
    const request = axios.put(`${baseUrl}/${id}`, changeValue)
    request.then(response => {
        return response.data
    })
    
     // When function has conducted, so te current data is saved under the return response.data", that we can use that variables data in side, if this would ne be used then it would be error.

}

// We initialize variables "deleteValue", which purposet is to work when user want to delete information from baseUrl, which leaves with ID forever. 
// There is also a good to mention that buttons "value" determine {id} for example is button value="2" as result this remove user information from  baseUrl => "http://localhost:3000/persons/2" forever. 
// When user want to delete information from baseUrl, as result side conduct always that function => "deleteValue(...)"
const deleteValue = async (id) => { // We initalize also "id" variables use inside that function, if this not would be then it would be error. 
    const request = axios.delete(`${baseUrl}/${id}`) // Variables "id" has initialized in row 
    request.then(response => {
        return response.data
    })
}
                    // When function has conducted, then the current data saved  under "response.data ", that we can use its variables data in side, if this would not be used then it would be error!


export default {getAllValues, createValue, deleteValue, updateValue}




