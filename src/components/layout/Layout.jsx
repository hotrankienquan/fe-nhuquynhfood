import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout