import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from "./components/AboutUs/AboutUs"
import Projects from "./components/OurProjects/OurProjects"
import ServicesCards from "./components/ServicesCards/ServicesCards"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App bg-[#111827]">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Projects></Projects>
      <AboutUs></AboutUs>
      <ServicesCards></ServicesCards>
      <Footer></Footer>
    </div>
  )
}

export default App