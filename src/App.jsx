import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Tecnologies from './components/tecnologies/Tecnologies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Tecnologies />
      <Contact />
      <Footer />
    </>
  )
}

export default App