import React from 'react'
import './footer.css'
import FooterSocials from './FooterSocials'
import {useTranslation} from "react-i18next"

const Footer = () => {
  
  const [txt, i18n] = useTranslation("global")
  
  return (
    <footer>
      <div className="container footer__container">
        <h4>{txt("footer.title")}</h4>
        <FooterSocials />
      </div>
    </footer>
  )
}

export default Footer