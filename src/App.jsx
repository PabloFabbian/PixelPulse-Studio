import NavBar from "./components/Navbar/NavBar"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from "./components/AboutUs/AboutUs"
import Projects from "./components/OurProjects/OurProjects"
import ServicesCards from "./components/ServicesCards/ServicesCards"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App bg-[#111827]">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Projects></Projects>
      <AboutUs></AboutUs>
      <ServicesCards></ServicesCards>
      <Footer></Footer>
    </div>
  )
}

export default App