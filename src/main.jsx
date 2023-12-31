import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router } from "react-router-dom";

const pathname = location.pathname;
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
  <Router>
    <App location={location} pathname={pathname} />
  </Router>
  </React.StrictMode>,
)
