import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import LearningResources from "./pages/LearningResources"
const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/learningresources' element={<LearningResources />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
