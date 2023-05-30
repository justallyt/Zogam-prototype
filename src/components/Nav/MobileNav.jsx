import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { gsap } from "gsap"
import { navContext } from "../../context/navContext"
import { useContext, useEffect, useRef } from "react"
const MobileNav = () => {
    const [status, setStatus] = useContext(navContext);

    const wrapRef = useRef();
    const toggleRef = useRef();

    const removeMenu = () => setStatus(false);
    useEffect(()=>{
            const realWrap = wrapRef.current;
            const toggleWrap = toggleRef.current;

            if(status){
                  realWrap.classList.add("active");

                  gsap.to(toggleWrap, {
                         rotationY: 0,
                         duration: 0.5,
                         opacity: 1
                  })
            }else{
                  gsap.to(toggleWrap, {
                        rotationY: '35deg',
                        opacity: 0,
                        duration: 0.5
                  })    

                  setTimeout(() => { realWrap.classList.remove('active') }, 600)
            }
    }, [status])
  return (
    <div className="mobile-nav-wrapper" ref={wrapRef}>
             <div className="wrapper-inner" ref={toggleRef}>
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
                                        <div className="toggle-mobile" onClick={removeMenu}>
                                                <span><CgClose /></span>
                                        </div>
                                 </div>

                                 <div className="information-specifics">
                                           <div className="specific-row">
                                                   <p>Location</p>
                                                   <h2>PRJQ+R64, Chai Raod, Pangani Nairobi</h2>
                                           </div>
                                           <div className="specific-row">
                                                  <p>Call Us</p>
                                                  <h2>+(254)-7123-45678</h2>
                                           </div>
                                           <div className="specific-row">
                                                   <p>Email Us</p>
                                                   <h2>info@example.com</h2>
                                           </div>
                                 </div>
                      </div>
             </div>
    </div>
  )
}

export default MobileNav