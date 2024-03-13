import NavBar from "./components/ANavbar/NavBar"
import HeroHeaderSection from "./components/CHeroHeaderSection/HeroHeaderSection"
import Projects from "./components/DFeaturedProjects/FeaturedProjects"
import GraphicDesignServices from "./components/EGraphicDesignServices/GraphicDesignServices"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroHeaderSection></HeroHeaderSection>
      <Projects></Projects>
      <GraphicDesignServices></GraphicDesignServices>
      <h1 className="text-blue-500 text-4xl font-bold text-center mt-16">Hola mundo</h1>
    </div>
  )
}

export default App