import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { CgClose } from "react-icons/cg"
const MobileNav = () => {
  return (
    <div className="mobile-nav-wrapper">
             <div className="wrapper-inner">
                      <div className="navigation-side">
                               <ul>
                                       <ul>
                                             <li><NavLink to={'/'}>Home</NavLink></li>
                                             <li><NavLink to={'/'}>About</NavLink></li>
                                             <li><NavLink to={'/'}>Services</NavLink></li>
                                             <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                             <li><NavLink to={'/'}>Articles</NavLink></li>
                                             <li><NavLink to={'/'}>Contact Us</NavLink></li>
                                       </ul>
                               </ul>
                      </div>
                      <div className="navigation-description">
                                 <div className="information-head">
                                        <NavLink to={'/'}>
                                                 <div className="logo">
                                                         <img src={logo} alt="" />
                                                 </div>
                                        </NavLink>
                                        <div className="toggle-mobile">
                                                <span><CgClose /></span>
                                        </div>
                                 </div>
                      </div>
             </div>
    </div>
  )
}

export default MobileNav