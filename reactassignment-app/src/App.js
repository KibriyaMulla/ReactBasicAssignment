
import './App.css';
import PersonDetails from './Person/PersonDetails';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {getPerson} from "./redux/saga/request";
import {useEffect} from "react";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
 dispatch(getPerson());
  },[dispatch]);

const name= useSelector((state)=> state.personReducer.person)

  return (
    <div className="App">
      {/* <PersonDetails/> */}
      <p>Hello EveyOne</p>
      
    </div>
  );
}

export default App;
