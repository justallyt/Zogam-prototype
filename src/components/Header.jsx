import { ImLocation2 } from "react-icons/im"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { RiFacebookFill } from "react-icons/ri"
import { AiOutlineInstagram } from "react-icons/ai"
import { RiLinkedinBoxFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { CgMenuRight } from "react-icons/cg"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="header-wrapper">
            <div className="topbar">
                     <div className="topbar-inner">
                             <div className="left-side">
                                     <div className="location">
                                              <span><ImLocation2 /></span>
                                              <p>Chai Road, Pangani - Nairobi</p>
                                     </div>
                                     <div className="email">
                                             <span><BsFillEnvelopeFill /></span>
                                             <p>consultations@zogamengineers.co.ke</p>
                                     </div>
                            </div>
                             <div className="right-side">
                                      <NavLink className="faq" to="/">FAQ</NavLink>
                                      <div className="socials">
                                              <NavLink to={'/'}>
                                                     <span><RiFacebookFill /></span>
                                              </NavLink>
                                              <NavLink to={'/'}>
                                                     <span><AiOutlineInstagram /></span>
                                              </NavLink>
                                              <NavLink to={'/'}>
                                                     <span><RiLinkedinBoxFill /></span>
                                              </NavLink>
                                              <NavLink to={'/'}>
                                                     <span><SiTwitter /></span>
                                              </NavLink>
                                      </div>
                             </div>
                     </div>
            </div>

            <div className="header-content">
                       <div className="header-content-inner">
                                 <div className="logo">
                                        <NavLink to={'/'}>
                                                 <img src={logo} alt="" />
                                        </NavLink>
                                 </div>

                                 <nav>
                                       <ul>
                                             <li><NavLink to={'/'}>Home</NavLink></li>
                                             <li><NavLink to={'/'}>About</NavLink></li>
                                             <li><NavLink to={'/'}>Services</NavLink></li>
                                             <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                             <li><NavLink to={'/'}>Articles</NavLink></li>
                                             <li><NavLink to={'/'}>Contact Us</NavLink></li>
                                       </ul>
                                 </nav>

                                 <div className="support-edge">
                                           <div className="contacts">
                                                    <div className="contacts-inner">
                                                             <p>Call for support</p>
                                                             <h3>+254-7123-45678</h3>
                                                    </div>
                                           </div>
                                           <div className="toggle-btn">
                                                    <span><CgMenuRight /></span>
                                           </div>
                                 </div>
                       </div>
            </div>
    </div>
  )
}

export default Header