import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'features/user'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.user)

  const authLinks = (
    <>
      <NavLink to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink to='/' onClick={() => dispatch(logout())}>
        Logout
      </NavLink>
    </>
  )

  const guesLinks = (
    <li>
      <NavLink to='/login'>
        Login
      </NavLink>
      <NavLink to='/register'>
        Register
      </NavLink>
    </li>
  )

  return (
    <div>
      <Link>
        Auth Site
      </Link>
      <NavLink to='/'>
        Home
      </NavLink>
      {isAuthenticated ? authLinks : guesLinks}
    </div>
  )
}

export default Navbar