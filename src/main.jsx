import React from 'react'
import ReactDOM from 'react-dom/client' // FRONT-END NA WEB //REACT-NATIVE - FRONT-END  MOBILE
import App from './App.jsx' //Isso é um componente
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
