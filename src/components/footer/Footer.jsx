import React from 'react'
import './footer.css'
import FooterSocials from './FooterSocials'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <h4>Pedro J. Cruces - Desarrollador Web</h4>
        <FooterSocials />
      </div>
    </footer>
  )
}

export default Footer