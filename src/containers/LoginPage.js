import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { resetRegistered, login } from 'features/user'

import Layout from 'components/Layout'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { loading, isAuthenticated, registered } = useSelector(
    state => state.user
  )

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (registered)
      dispatch(resetRegistered())
  }, [registered])

  const { email, password } = formData

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault()

    dispatch(login({ email, password }))
  }

  if (isAuthenticated)
    return <Navigate to='/dashboard' />

  return (
    <Layout title='Auth Site | Login' content='Login page'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input 
            type='email'
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type='password'
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ): (
          <button>
            Login
          </button>
        )}
      </form>
    </Layout>
  )
}

export default LoginPage
