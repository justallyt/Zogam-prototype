import { NavLink } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
const ServicesSection = () => {
  return (
    <div className="services-section">
                <div className="inner-row-2">
                             <div className="services-content-row">
                                          <div className="services-column">
                                                       <p>Explore what we do for our clients</p>

                                                       <h1>Our Sectors</h1>

                                                        <NavLink to={'/'}>
                                                                      <span><BsArrowRight /></span>
                                                                      <p>Explore All</p>
                                                        </NavLink>
                                          </div>
                                          <div className="services-column"></div>
                                          <div className="services-column"></div>
                             </div>
                </div>
    </div>
  )
}

export default ServicesSection