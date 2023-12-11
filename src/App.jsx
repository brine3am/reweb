import './App.css'
import BackLines from './components/BackLines'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HeroDesc from './components/HeroDesc'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  AOS.init();
  return (
    <div id='main-cont'>
      <Navbar/>
      <Hero/>
      <HeroDesc/>
      <Projects/>
      <Carousel/>
      <SocialLinks/>
      <Footer/>
      {/* <BackLines/> */}
    </div>
  )
}

export default App
