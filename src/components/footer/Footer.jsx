import React from 'react'
import './footer.css'
import HeaderSocials from '../header/HeaderSocials'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <h4>Pedro J. Cruces - Desarrollador Web</h4>
        <HeaderSocials />
      </div>
    </footer>
  )
}

export default Footer