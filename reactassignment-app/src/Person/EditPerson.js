
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { editPerson } from "../redux/actions/personAction";
import { useDispatch } from "react-redux";
import { Form, Button, Input } from 'antd'
const EditPerson = (props) => {


  const location = useLocation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompnay] = useState();
  const [website, setWebsite] = useState();
  const [address, setAddress] = useState();
  // console.log(location.state.person);



  const onUpdate = () => {
    const dispatch = useDispatch();
    const person = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      website: website,
      address: address
    };
    dispatch(editPerson(person));

  }
  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/PersonDetails');

  }

  return (
    <div className="EditButtonText">
      <Form >
        <Form.Item label="Name" name="name">
          <input placeholder="Name" defaultValue={location.state.person.name} onChange={(e) => setName(e.target.value)}></input>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <input placeholder="Email" defaultValue={location.state.person.email} onChange={(e) => setEmail(e.target.value)}></input>
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <input placeholder="Phone" defaultValue={location.state.person.phone} onChange={(e) => setPhone(e.target.value)}></input>
        </Form.Item>
        <Form.Item label="Company " name="company">
          <input placeholder="Company" defaultValue={location.state.person.company.name} onChange={(e) => setCompnay(e.target.value)}></input>
        </Form.Item>
        <Form.Item label="Website" name="website">
          <input placeholder="Website" defaultValue={location.state.person.website} onChange={(e) => setWebsite(e.target.value)}></input>
        </Form.Item>
        <Form.Item label="Address" name="address" defaultValue={location.state.person.address.street}{...location.state.person.address.suite} {...location.state.person.address.city}{...location.state.person.address.zipcode} onChange={(e) => setAddress(e.target.value)} >
          <input placeholder="Address"></input>
        </Form.Item>
        <Form.Item>
          <button type="Primary" htmlType="submit" onClick={onUpdate}>Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="Primary" htmlType="submit" onClick={onCancel}>Cancel</button>
        </Form.Item>



      </Form>


    </div>
  )
}


export default EditPerson