import React from "react";
import "./PersonDetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import{HeartOutlined ,MailOutlined,GlobalOutlined,PhoneOutlined,DeleteOutlined,EditOutlined,HeartFilled} from '@ant-design/icons'
import{Card }from 'antd'


const SinglePersonDetails = (props) => {
    const navigate = useNavigate();
    const onEdit = (event, props) => {

        navigate('/EditPerson', { state: { person: props } });

    }
    const onDelete = () => {

        
    }
const onFave= ()=>{
<HeartFilled  style={{color:'red',fontSize:30}}/>
}


    return (
   
        <div className="Person">
            <img  className="cardHeadImage"  src={props.url} />
            <Card > 
            <h2>{props.name}</h2>
            
            <p > <MailOutlined  style={{color:'gray',fontSize:20}}    />  <b>  Email : </b>{props.email}</p>
            <p > <PhoneOutlined  style={{color:'gray',fontSize:20}}    /><b>   Phone : </b>{props.phone}</p>
            {/* <p> <b>Company:</b>{props.company.name}</p> */}
            <p> <GlobalOutlined style={{color:'gray',fontSize:20}}     />   <b>  Website : </b>{props.website}</p>
        </Card>
            {/* <p> <b>Address : </b>{props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</p> */}
            {/* <button className="ButtonEdit" onClick={(e) =>onEdit(e, props)}>Edit</button>
            <button className="ButtonDelete"onClick={onDelete}>Delete</button> */}
            <div className="Button">
                {/* <button className="Button" onClick={(e) => onEdit(e, props)}>Edit</button>
                <button className="Button" onClick={onDelete}>Delete</button> */}
                <Card >
            
               <div >
                <HeartOutlined  style={{color:'red',fontSize:20}} className="fav"onClick={onFave}/>
                 <EditOutlined  style={{color:'gray',fontSize:20}} className="edit"onClick={(e) => onEdit(e, props)} />
                 <DeleteOutlined style={{color:'gray',fontSize:20}} className="delete" onClick={onDelete}/>
                 </div>
                 </Card>
                 
            
                
            </div>
        </div>
    )
}

export default SinglePersonDetails