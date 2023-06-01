import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { ImPlay3 } from "react-icons/im"
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';

import { Autoplay, EffectFade } from "swiper";
import {  useState } from "react";
const HeroSection = () => {
   const [swiperRef, setSwiperRef] = useState(null)

   const prevHandler = () => swiperRef.slidePrev();
   const nextHandler = () => swiperRef.slideNext()
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
                          on={{
                                slideChange: function(){
                                          let current = this.activeIndex + 1;
                                          console.log(current)
                                }
                          } }
                        onSwiper={(swiper) => setSwiperRef(swiper) }
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
                                                        <div className="video-btn">
                                                                 <span><ImPlay3 /></span>
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
                                                          <div className="video-btn">
                                                                 <span><ImPlay3 /></span>
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
                                                           <div className="video-btn">
                                                                     <span><ImPlay3 /></span>
                                                            </div>
                                               </div>
                                       </div>
                                )}
                               </SwiperSlide>
                     </Swiper>
                     <div className="activity-box">
                                  <div className="left-btn" onClick={prevHandler}>
                                             <p>Prev</p>
                                  </div>
                                  <div className="indicator"><h2>1 / 3</h2></div>
                                  <div className="right-btn" onClick={nextHandler}>
                                               <p>Right</p>
                                  </div>
                     </div>
           </div>
    </div>
  )
}

export default HeroSection