import SinglePersonDetails from "./SinglePersonDetails";
import React, { useRef } from "react";
import {useLocation} from "react-router-dom";
const EditPerson=(props) =>{
  
    const location = useLocation();
  //console.log(location.state.person);
    
  const onSave=()=>{

  }
//   const inputData=useRef();
//   props.callbackFun(inputData.current.value);

    return(
        <div className="EditButtonText" contenteditable="true">
            {/* <form onSubmit={this.EditPerson}> */}  
            <br/><br/>
         <label> <b>Name:</b></label> 
         {/* <input type="text" ref={inputData} onChange={onEdit} value={location.state.person.name}/> <br/> <br/> */}
         <input type="text" value={location.state.person.name}/> <br/> <br/>
            <label><b> Email:</b></label> 
           <input type="text" value={location.state.person.email}/> <br/> <br/>
            <label><b> Phone:</b></label> 
            <input type="text" value={location.state.person.phone}/>  <br/><br/>
              <label> <b>  Company:</b></label>
            <input type="text" value={location.state.person.company}/>  <br/> <br/>
            <label><b> Website:</b></label> 
            <input type="text" value={location.state.person.website}/>  <br/><br/>
            <label><b> Address:</b></label> 
            <input type="text" value={location.state.person.address}{...location.state.person.address.street}{...location.state.person.address.suite} {...location.state.person.address.city}{...location.state.person.address.zipcode}/><br/><br/>
            <button onClick={onSave}>Save</button><br/><br/>
            {/* </form> */}
        
        </div>
    )
    }

export default EditPerson