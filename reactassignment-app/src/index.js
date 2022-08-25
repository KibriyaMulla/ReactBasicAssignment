import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditPerson from './Person/EditPerson';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import index from "./redux/index";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/EditPerson" element={<EditPerson />} />
  //     <Route path="/" element={<App />} />

  //   </Routes>

  // </BrowserRouter>
  
  <Provider index={index}>
    <App />
  </Provider>
);


reportWebVitals();
