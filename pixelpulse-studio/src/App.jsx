import NavBar from "./components/ANavbar/NavBar"
import HeroHeaderSection from "./components/CHeroHeaderSection/HeroHeaderSection"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroHeaderSection></HeroHeaderSection>
      <h1 className="text-blue-500 text-4xl font-bold text-center mt-16">Hola mundo</h1>
    </div>
  )
}

export default App