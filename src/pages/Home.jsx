import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Nav from "../components/Nav/Nav"
import "../css/home.css"

const Home = () => {
  return (
    <>
        <Nav />
        <HeroSection />
        <AboutSection />
    </>
  )
}

export default Home