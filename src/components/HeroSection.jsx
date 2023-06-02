import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { ImPlay3 } from "react-icons/im"
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';

import { Autoplay, EffectFade } from "swiper";
import {  useState } from "react";

const swiperData = [
        {
                id: 0,
                title: 'Consultancy in Kenya',
                main: 'Engineering',
                idtext: 'one',
                description: 'Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions',
        },
        {
                id: 1,
                title: 'Bringing life to your',
                main: 'Vision',
                idtext: 'two',
                description: 'Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions',
        },
        {
                id: 2,
                title: 'Diverse Team of',
                main: 'Professionals',
                idtext: 'three',
                description: 'Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions',
        }
]
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
                       
                        onSwiper={(swiper) => setSwiperRef(swiper) }
                        modules={[Autoplay, EffectFade]}
                     >
                              
                         { swiperData.map(item => 
                                <SwiperSlide key={item.id}>
                                        { ({ isActive }) => (
                                                 <div className={`slide-moja ${item.idtext}`}>
                                                         <div className="slide-moja-inner">
                                                                  <div className={ isActive ? "slide-texts active" : "slide-texts"}>
                                                                         { item.id === 0 ? 
                                                                                <h1><span>{item.main} </span>{item.title}</h1>
                                                                             :  item.id == 1 ?
                                                                                <h1>{item.title} <span>{item.main}</span></h1>
                                                                             :  <h1>{item.title} <span>{item.main}</span></h1>
                                                                         }
                                                                        <p>{item.description}</p>
        
                                                                        <div className="hero-btn">
                                                                                <NavLink to={'/contact'}>Get in Touch</NavLink>
                                                                        </div>
                                                                  </div>
                                                                  <div className="video-btn">
                                                                         <span><ImPlay3 /></span>
                                                                 </div>
                                                      </div>
                                                      <div className="activity-box">
                                                               <div className="left-btn" onClick={prevHandler}>
                                                                        <p>Prev</p>
                                                               </div>
                                                              <div className="indicator"><h2>{item.id + 1} / 3</h2></div>
                                                               <div className="right-btn" onClick={nextHandler}>
                                                                         <p>Right</p>
                                                              </div>
                                                        </div>
                                                </div>
                                        )}
                                </SwiperSlide>
                           )}
                     </Swiper>
                     
           </div>
    </div>
  )
}

export default HeroSection