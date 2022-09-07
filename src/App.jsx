import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Tecnologies from './components/tecnologies/Tecnologies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from "./components/nav/Nav";
import useLocalStorage from 'use-local-storage'

const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  return (
    <div data-theme={theme}>
      <Nav theme={theme} setTheme={setTheme}/>
      <Header />
      <About />
      {/* <Projects /> */}
      <Tecnologies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App