
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// const EditPerson = (props) => {

//   const location = useLocation();
//   const [Name, setName] = useState();
//   const [Email, setEmail] = useState();
//   const [Phone, setPhone] = useState();
//   const [Company, setCompnay] = useState();
//   const [Website, setWebsite] = useState();
//   const [Address, setAddress] = useState();
//   // console.log(location.state.person);
  


//   const onUpdate = () => {
//     let item = { Name, Email, Phone, Company, Website, Address };
//     console.log("item", item);
//     fetch('https://jsonplaceholder.typicode.com/users/${userId}',{
//       method:'PUT',

//       }).then((result)=>{
//         result.json().then((resp)=>{
//           console.log(resp)

//         })
//       })
    


//   }


//   return (
//     <div className="EditButtonText">

//       <br /><br />
//       <label> <b>Name:</b></label>

//       <input type="text" defaultValue={location.state.person.name} onChange={(e) => setName(e.target.value)} /> <br /> <br />

//       <label><b> Email:</b></label>

//       <input type="text" defaultValue={location.state.person.email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

//       <label><b> Phone:</b></label>

//       <input type="text" defaultValue={location.state.person.phone} onChange={(e) => setPhone(e.target.value)} />  <br /><br />

//       <label> <b>  Company:</b></label>

//       <input type="text" defaultValue={location.state.person.company.name} onChange={(e) => setCompnay(e.target.value)} />  <br /> <br />

//       <label><b> Website:</b></label>

//       <input type="text" defaultValue={location.state.person.website} onChange={(e) => setWebsite(e.target.value)} />  <br /><br />

//       <label><b> Address:</b></label>

//       <input type="text" defaultValue={location.state.person.address.street}{...location.state.person.address.suite} {...location.state.person.address.city}{...location.state.person.address.zipcode} onChange={(e) => setAddress(e.target.value)} /><br /><br />

//       <button onClick={onUpdate} >Update</button><br /><br />


//     </div>
//   )
// }


// export default EditPerson