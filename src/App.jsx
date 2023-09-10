import './App.css'
import BackLines from './components/BackLines'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'

function App() {

  return (
    <div id='main-cont'>
      <Navbar/>
      <Hero/>
      <Projects/>
      <SocialLinks/>
      <Footer/>
      {/* <BackLines/> */}
    </div>
  )
}

export default App
