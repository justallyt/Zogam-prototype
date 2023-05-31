import HeroSection from "../components/HeroSection"
import Nav from "../components/Nav/Nav"
import "../css/home.css"

const Home = () => {
  return (
    <>
        <Nav />
        <HeroSection />
        <div className="spacer"></div>
    </>
  )
}

export default Home