import React from 'react'
//import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';
import App from './App.jsx'
import './index.css'

/*ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)*/

createRoot(
    document.querySelector('#root'))
    .render(
    <App />
    );