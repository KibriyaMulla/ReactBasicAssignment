import React from "react";
import "./PersonDetails.css";
import {useNavigate} from"react-router-dom";

const SinglePersonDetails=(props) => {
    const navigate = useNavigate();
    const onEdit=(event,props)=>{
    
        navigate('/EditPerson',{ state: { person : props }});

    }
    const onDelete=()=>{


    }
    

    
    return (
        
        <div alignment="left" className="Person">
            <img alignment="right" className="Person_avtar" src={props.url} />
            
            <h2>{props.name}</h2>
            <p > <b>Email : </b>{props.email}</p>
            <p > <b>Phone : </b>{props.phone}</p>
            <p> <b>Company:</b>{props.company.name}</p>
            <p><b>Website : </b>{props.website}</p>
            <p> <b>Address : </b>{props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</p>
            {/* <button className="ButtonEdit" onClick={(e) =>onEdit(e, props)}>Edit</button>
            <button className="ButtonDelete"onClick={onDelete}>Delete</button> */}
              <div className="Button">
              <button className="Button" onClick={(e) =>onEdit(e, props)}>Edit</button>
            <button className="Button" onClick={onDelete}>Delete</button>
                </div>       
        </div>
    )
}
export default SinglePersonDetails