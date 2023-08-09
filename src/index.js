import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavLayout from './component/NavLayout';
import Slider from './component/Slider';
import Carcs from "./component/Carcs";
//import Product1 from './component/Product1';
//import Rater from './component/Rater';
//import NavLayout from './component/NavLayout';
//import About from './component/About';
//import RouteConfig from './component/RouteConfig';
//import Counter from './component/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <NavLayout/>
    <Slider/>
    <Carcs/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
