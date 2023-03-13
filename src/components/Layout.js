import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from './Navbar'

const Layout = ({ title, content, children}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta content={content}/>
      </Helmet>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout