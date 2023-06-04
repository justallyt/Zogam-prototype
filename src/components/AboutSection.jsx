import { NavLink } from "react-router-dom"
import civil1 from "../assets/civil1.jpg"
import civil2 from "../assets/civil2.jpg"
import { BsArrowRight } from 'react-icons/bs'
const AboutSection = () => {
  return (
    <div className="about-section">
              <div className="inner-row">
                        <div className="about-section-content">
                                    <div className="images-column">
                                                <div className="images-column-row">
                                                            <img src={civil1} alt="" />
                                                            <img src={civil2} alt="" />
                                                </div>
                                    </div>
                                    <div className="about-description-column">
                                                 <div className="about-description-column-inner">
                                                             <div className="intro">
                                                                      <h4>About Company</h4>
                                                             </div>
                                                             <h1>We are leaders in Civil and Structural Consulting.</h1>
                                                             <p>We are proud of our record as a leading civil engineering contractor. A record that is continuously recognised by the industry&apos;s leaders for our creativity, added-value engineering and, most importantly, integrity. Governed by sector experts, our people make us unique and provide the practical intelligence to genuinely make our clients&apos; lives easier, their projects smoother and implement benefits beyond the brief.</p>
                                                             <p>We consistently strive to make a difference so that our work delivers lasting impact to millions of people throughout the Kenya and all across Africa.</p>

                                                             <NavLink to={'/'}>Explore More <span><BsArrowRight /></span></NavLink>
                                                 </div>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutSection