import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Admin from './Components/Admin'
import Controller from './Components/Controller'
import Headcoach from './Components/Headcoach'
import Coach from './Components/Coach'
import NoteState from './Context/Notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/admin' element={<div><Admin /></div>} />
            <Route path='/controller' element={<div><Controller /></div>} />
            <Route path='/headcoach' element={<div><Headcoach /></div>} />
            <Route path='/coach' element={<div><Coach /></div>} />
            <Route path='/login' element={<div><Login/></div>}/>
            <Route path='/signup' element={<div><Signup/></div>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
