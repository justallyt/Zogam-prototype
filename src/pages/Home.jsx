import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Nav from "../components/Nav/Nav"
import ServicesSection from "../components/ServicesSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
        <Nav />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
    </>
  )
}

export default Home