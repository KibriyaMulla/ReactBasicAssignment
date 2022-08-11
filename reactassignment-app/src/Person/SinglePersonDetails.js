import React from "react";
const SinglePersonDetails=(Props)=>{

    return(
        <div>
            <p> Name:{Props.name}</p>
            <p> Email:{Props.email}</p>
            <p> Phone:{Props.phone}</p>
            <p> Company:{Props.company}</p>
            <p>Website:{Props.website}</p>
            <p> Address:{Props.address}</p>   

        </div>
    )
}
export default SinglePersonDetails