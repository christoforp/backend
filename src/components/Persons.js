import React from "react";





// creating component named by  "Persons component". return() returning  value in below, which includes BACK TO App component.
// props.personValue.filter is same thing than => Persons.filter(...)  variables "Persons"  has  initialized in App component. 
// includes(props.filterNameValue) same thing than  => .includes(filterName)  variables "FilterName" has  initialized in App component 
// There is no needed to use any other props in that component, because all  other variables coming  "customn"
// <div key={b.name}> means that all rows what are rendering as result then it is  given unique value (Name)


const PersonsComponent = (props) => {
    return(
      <div>
        {props.personValue.filter(a => a.name.toLowerCase().includes(props.filterNameValue.toLowerCase())).map(b =>
          <div key={b.name}>Name: {b.name}, {b.number} (phone number) <button  value={b.id} onClick={props.deleteValue}>delete</button></div>  // {b.name}+ {b.number} + {b.id} seeking values from variable "persons" and shows "name", "phoneNumber", "number" and "id" values to user. 
        )}
      
      </div>
    )
  }
  
  export default PersonsComponent

