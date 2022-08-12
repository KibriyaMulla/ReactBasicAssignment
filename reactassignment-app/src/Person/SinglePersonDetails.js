import React from "react";
import "./PersonDetails.css";
const SinglePersonDetails = (props) => {


    return (

        <div alignment="left" className="Person">
            <img alignment="right" className="Person_avtar" src={props.url} />
            <h2>{props.name}</h2>
            <p > <b>Email : </b>{props.email}</p>
            <p > <b>Phone : </b>{props.phone}</p>
            {/* <p> <b>Company:</b>{props.company.name}</p> */}
            <p><b>Website : </b>{props.website}</p>
            <p> <b>Address : </b>{props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</p>

        </div>
    )
}
export default SinglePersonDetails