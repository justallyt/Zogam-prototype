import { NavLink } from "react-router-dom"
import { CgMenuRight } from "react-icons/cg"
import logo from "../../assets/logo.png"
import { useContext, useState } from "react"
import { navContext } from "../../context/navContext"

const ScrolledHeader = () => {
    const [status, setStatus] = useContext(navContext)
     const [scrolled, setScrolled] = useState(false);
    const toggleBtn = () => setStatus(!status);

    window.addEventListener("scroll", () => {
         if(window.scrollY > 50){
               setScrolled(true);
         }else{
               setScrolled(false)
         }
    })
  return (
    <div className={scrolled ? "header-wrapper scrolled show" : "header-wrapper scrolled hide"}>
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
                                             <li><NavLink to={'/about'}>About</NavLink></li>
                                             <li><NavLink to={'/services'}>Services</NavLink></li>
                                             <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                                             <li><NavLink to={'/articles'}>Articles</NavLink></li>
                                             <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                                       </ul>
                                 </nav>

                                 <div className="support-edge">
                                           <div className="contacts">
                                                    <div className="contacts-inner">
                                                             <p>Call for support</p>
                                                             <h3>+254-7123-45678</h3>
                                                    </div>
                                           </div>
                                           <div className="toggle-btn" onClick={toggleBtn}>
                                                    <span><CgMenuRight /></span>
                                           </div>
                                 </div>
                       </div>
            </div>
    </div>
  )
}

export default ScrolledHeader