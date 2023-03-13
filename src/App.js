import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { checkAuth } from 'features/user'

import HomePage from 'containers/HomePage'
import LoginPage from 'containers/LoginPage'
import RegisterPage from 'containers/RegisterPage'
import DashboardPage from 'containers/DashboardPage'



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/login' element={<LoginPage />}/>
        <Route exact path='/register' element={<RegisterPage />}/>
        <Route exact path='/dashboard' element={<DashboardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App