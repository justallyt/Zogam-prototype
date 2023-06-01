import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";
const HeroSection = () => {

  return (
    <div className="hero-wrapper">
           <div className="slides-container">
                     <Swiper
                          slidesPerView={1}
                          loop={true}
                          effect={'fade'}
                          speed={1000}
                          autoplay= {{
                                delay: 3500,
                                disableOnInteraction: false
                          }}
                          modules={[Autoplay, EffectFade]}
                     >
                               <SwiperSlide>
                                    { ( { isActive }) => (
                                         <div className="slide-moja one">
                                                   <div className="slide-moja-inner">
                                                          <div className={ isActive ? "slide-texts active" : "slide-texts"}>
                                                                 <h1> <span>Engineering</span> Consultancy in Kenya</h1>
                                                                 <p>Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions.</p>

                                                                <div className="hero-btn">
                                                                        <NavLink to={'/contact'}>Get in Touch</NavLink>
                                                                </div>
                                                        </div>
                                                 </div>
                                         </div>
                                    )}
                               </SwiperSlide>
                               <SwiperSlide>
                                { ({ isActive }) => (
                                         <div className="slide-moja two">
                                                 <div className="slide-moja-inner">
                                                          <div className={ isActive ? "slide-texts active" : "slide-texts"}>
                                                                <h1>Bringing your <span>Vision</span> to Life</h1>
                                                                <p>Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions.</p>

                                                                <div className="hero-btn">
                                                                        <NavLink to={'/contact'}>Get in Touch</NavLink>
                                                                </div>
                                                          </div>
                                              </div>
                                        </div>
                                )}
                               </SwiperSlide>
                               <SwiperSlide>
                                { ({ isActive }) => (
                                      <div className="slide-moja three">
                                               <div className="slide-moja-inner">
                                                           <div className={ isActive ? "slide-texts active" : "slide-texts"}>
                                                                 <h1>Diverse team of <span>Professionals</span></h1>
                                                                 <p>Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions.</p>

                                                                 <div className="hero-btn">
                                                                         <NavLink to={'/contact'}>Get in Touch</NavLink>
                                                                 </div>
                                                           </div>
                                               </div>
                                       </div>
                                )}
                               </SwiperSlide>
                     </Swiper>
                   

                   
                   <nav id="slider-nav">
                       <span className="current">01</span>
                     <span className="sep"></span>
                     <span className="total">04</span>
                  </nav>
           </div>
    </div>
  )
}

export default HeroSection