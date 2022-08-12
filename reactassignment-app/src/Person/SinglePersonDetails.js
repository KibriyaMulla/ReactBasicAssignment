import React from "react";
import "./PersonDetails.css";
const SinglePersonDetails = (props) => {


    return (
        
        <div>
            <img className="Person_image" src={props.url} />
            <p> Name:{props.name}</p>
            <p> Email:{props.email}</p>
            <p> Phone:{props.phone}</p>
            <p> Company:{props.company.name}</p>
            <p>Website:{props.website}</p>
            <p> Address:{props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</p>

        </div>
    )
}
export default SinglePersonDetails