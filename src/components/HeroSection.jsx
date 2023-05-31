import { NavLink } from "react-router-dom"


const HeroSection = () => {
  return (
    <div className="hero-wrapper">
           <div className="slides-container">
                   <div className="slide-moja">
                           <div className="slide-moja-inner">
                                       <div className="slide-texts">
                                             <h1>Leading <span>Engineering</span> Consultancy in Kenya</h1>
                                             <p>Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions.</p>

                                             <div className="hero-btn">
                                                     <NavLink to={'/contact'}>Get in Touch</NavLink>
                                             </div>
                                       </div>
                           </div>
                   </div>
           </div>
    </div>
  )
}

export default HeroSection