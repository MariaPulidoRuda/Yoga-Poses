import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'


//Import pages
import Home from './components/pages/Home'
import Pose from './components/pages/Pose'
import Poses from './components/pages/Poses'


//definir en el BrowserRouter todas las rutas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="poses" element={<Poses />} />
          <Route path='/pose/:id' element={<Pose />} /> 
          <Route
            path="*"
            element={
              <main>
                <p>404 - NOT FOUND!</p> 
              </main>
            }
            //lo ideal es hacer una página con 404 NOT FOUND
          ></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
) 

