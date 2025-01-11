import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import React, { useRef, useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'


const Button = ({text, containerClasses, textClasses}) => {
    const [isHovered, setIsHovered] = useState(false);
    gsap.registerPlugin(Flip);
    let arrowRef = useRef(null);

    useGSAP(() => {
        arrowRef.current.classList.toggle('hidden', !isHovered);
        arrowRef.current.classList.toggle('flex', isHovered);
        gsap.to(arrowRef.current, {
            rotate: 45,
            yPercent: isHovered ? 50 : 0,
            scale: isHovered ? 1.25 : 0,
            duration: 0.75,
            ease: "power3.inOut",
        })

    }, [isHovered]);
    return (
        <button className={`min-h-20 rounded-full py-4 px-8 bg-zinc-800  font-light flex justify-between items-center gap-4 ${containerClasses}`} onMouseOver={(e) => setIsHovered(true)} onMouseLeave={(e) => setIsHovered(false)}>
            <div className={"text-white uppercase text-xl font-montreal " + textClasses}>{text}</div>
            <div className={`rounded-full bg-white relative right-0 transition-all ease-in-out ${isHovered ? "w-10 h-10 m-0" : "w-3 h-3 mr-3"}`}>
                <div className="rotate-0 hidden w-full h-full transform text-black" ref={arrowRef}>
                    <FaArrowUpLong color='black' />
                </div>
            </div>
        </button>
    )
}

export default Button