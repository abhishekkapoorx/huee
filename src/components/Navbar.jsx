import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Navbar = () => {
    useGSAP(() => {
        gsap.from(".nav", {
            y: -100,
            autoAlpha: 0.15,
            duration: 1,
            ease: "power3.inOut",
            delay: 0,
        })
    }, []);
    return (
        <div className='nav fixed z-[999] w-full px-20 py-8 font-montreal flex justify-between items-center bg-white-700  backdrop-filter backdrop-blur-lg bg-opacity-10' >
            <div className="logo">
                <img src="/SVG/Huee_white.svg" width={80} height={40} alt="logo" />
            </div>

            <div className="links flex gap-4">
                {["Services", "Our Work", "About Us", "Insights", "Contacts"].map((link, index) => (
                    <a key={index} href={`/${link.toLowerCase()}`} className={`text-xl capitalize font-light ${index === 4 && "ml-[25vw]"}`}>{link}</a>
                ))}
            </div>

        </div>
    )
}

export default Navbar