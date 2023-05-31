import { NavLink } from "react-router-dom"
import { clearRequestInterval, addClasses, removeClasses, requestInterval } from "../utils"
import { useEffect, useRef } from "react"

const HeroSection = () => {
        const heroRef = useRef();
        const sliderRef = useRef();

        useEffect(() => {
                 const slider = {
                        hero: heroRef.current,
                        main: sliderRef.current,
                        handle: null,
                        idle: true,
                        activeIndex: -1,
                        interval: 4000
                 }

                 const changeSlide = (direction)=>{
                        slider.idle = false;
                        slider.hero.classList.remove('prev', 'next');

                        if(direction === 'next'){
                                slider.activeIndex = (slider.activeIndex + 1) % slider.total;
                                slider.hero.classList.add("next");
                        }else{
                                 slider.activeIndex = (slider.activeIndex - 1 + slider.total) % slider.total;
                                 slider.hero.classList.add('prev')
                        }

                        removeClasses(slider.items, ['prev', 'active']);

                        //set prev
                        const prevItems = [...slider.items].filter(item => {
                                  let prevIndex;
                                  if(slider.hero.classList.contains('prev')){
                                         prevIndex = slider.activeIndex === slider.total - 1 ? 0 : slider.activeIndex + 1
                                  }else{
                                        prevIndex = slider.activeIndex === 0 ?  slider.total - 1 : slider.activeIndex - 1;
                                  }

                                  return item.dataset.index == prevIndex
                        });

                        //set active
                        const activeItems = [...slider.items].filter(item => {
                                 return item.dataset.index == slider.activeIndex;
                        })

                        addClasses(prevItems, ['prev']);
                        addClasses(activeItems, ['active']);

                       const activeItem = slider.main.querySelector('.active');
                       activeItem.addEventListener('transitionend', waitForIdle, { once: true})
                 }

                 const stopAutoplay = () => {
                        slider.autoplay = false;
                        clearRequestInterval(slider.handle);
                 }

                 const waitForIdle = () => {
                         !slider.autoplay && autoplay(false);
                         slider.idle = true;
                 }

                 const autoplay = (initial) => {
                        slider.autoplay = true;
                        slider.items = slider.hero.querySelectorAll('[data-index]');
                        slider.total = slider.items.length / 2;

                        const loop = () => changeSlide('next');

                        initial && requestAnimationFrame(loop);
                        slider.handle = requestInterval(loop, slider.interval);
                 }


                 const loadingAnimation = () => {
                        slider.current.addEventListener
                 }
        }, [])
  return (
    <div className="hero-wrapper" ref={heroRef}>
           <div className="slides-container" ref={sliderRef}>
                   <div className="slide-moja" data-index='0'>
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
                   <div className="slide-moja" data-index='1'>
                           <div className="slide-moja-inner">
                                       <div className="slide-texts">
                                             <h1>Bringing your <span>Vision</span> to Life</h1>
                                             <p>Technical excellence. Responsive service. Local knowledge. Zogam is a leader in innovative planning, design, and construction solutions.</p>

                                             <div className="hero-btn">
                                                     <NavLink to={'/contact'}>Get in Touch</NavLink>
                                             </div>
                                       </div>
                           </div>
                   </div>
                   <div className="slide-moja" data-index='2'>
                           <div className="slide-moja-inner">
                                       <div className="slide-texts">
                                             <h1>Diverse team of <span>Professionals</span></h1>
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