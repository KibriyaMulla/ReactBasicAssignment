
import './App.css';
import PersonDetails from './Person/PersonDetails';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {getPerson} from "./redux/actions/personAction";
import { useEffect } from "react";
import 'antd/dist/antd.css';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson());
  }, [dispatch]);

  const person = useSelector((state) => state.personReducer.person);
  console.log(person);
  

  return (
    <div className="App">
      {/* <PersonDetails/> */}
      <p>Hello EveyOne</p>
     


    </div>

  );
}

export default App;

