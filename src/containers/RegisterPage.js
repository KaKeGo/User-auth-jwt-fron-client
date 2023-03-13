import React, { useState } from 'react'
import { Navigate } from 'react-router-dom' 
import { useSelector, useDispatch } from 'react-redux'

import { register } from 'features/user'

import Layout from 'components/Layout'


const RegisterPage = () => {
  const dispatch = useDispatch()
  const { registered, loading } = useSelector(
    state => state.user
    )

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const { first_name, last_name, email, password } = formData

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault()

    dispatch(register({
      first_name, last_name, email, password
    }))
  }

  if (registered)
    return <Navigate to='/login' />

  return (
    <Layout title='Auth Site | Dashboard' content='Dashboard page'>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input 
            type='text'
            name='first_name'
            onChange={onChange}
            value={first_name}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input 
            type='text'
            name='last_name'
            onChange={onChange}
            value={last_name}
            required
          />
        </div>
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
          <div>Loading</div>
        ): (
          <button>
            Register
          </button>
        )}
      </form>
    </Layout>
  )
}

export default RegisterPage