import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from 'react'

const Marquee = () => {
    const marqueeRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const marquee = marqueeRef.current;

        const childrenWidth = marquee.scrollWidth / 4; // Width of one set of items
        const duration = 10; // Adjust duration for speed

        let timeline = gsap.timeline();
        
        let direction = 1;

        timeline.to(marquee, {
            x: `-${childrenWidth}`, // Move left by the width of one set
            duration: duration,
            repeat: -1,
            ease: 'expo.inOut', // Ensure smooth looping
            onComplete: () => {
                // Reset position for a seamless loop
                // marquee.style.transform = `translateX(${direction === 1 ? 0 : -childrenWidth}px)`;
                // timeline.play();
            },
            
        });

        
        ScrollTrigger.create({
            trigger: marquee,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
            onUpdate: (self) => {
                timeline.timeScale(1+ self.getVelocity()/1000)
            },
        })
    }, {dependencies: [window.innerWidth]});

    return (
        <div className='w-full py-16 text-white bg-[#004D43] rounded-t-3xl overflow-hidden' data-speed="clamp(1)">
            <div className="border-t-2 border-b-2 border-zinc-300/10 ">
                <div className="uppercase flex items-center whitespace-nowrap" ref={marqueeRef}>
                    {[...Array(4).keys()].map((item, index) => <h1 key={item+index} className='leading-none text-[24rem] font-black font-founders'>We are ochi&nbsp;</h1>)}
                </div>
            </div>

        </div>
    )
}

export default Marquee