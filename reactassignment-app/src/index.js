import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditPerson from './Person/EditPerson';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import PersonDetails from './Person/PersonDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/EditPerson" element={<EditPerson />} />
  //     <Route path="/PersonDetails" element={<PersonDetails/>}/>
  //     <Route path="/" element={<App />} />

  //   </Routes>

  // </BrowserRouter>


    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

);
reportWebVitals();



