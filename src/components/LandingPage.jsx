import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
    useGSAP(() => {
        gsap.from("#greenDiv", {
            scaleX: 0,
            xPercent: -50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        })
        gsap.from("#nextText", {
            x: -150,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        })
        gsap.from("#lowerSection", {
            y: 100,
            autoAlpha: 0.15,
            duration: 1,
            ease: "power2.inOut",
            delay: 0,
        })
    }, []);
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1' data-speed="clamp(0)" >
            <div className="textStructure mt-44 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((text, index) => (
                    <div className="masker" key={text + index}>
                        <div className="w-fit flex items-center">

                            {index === 1 && <div className='w-[9rem] h-[6rem] relative top-2 bg-green-500 rounded-lg mr-2' id='greenDiv'></div>}
                            <h1 className='uppercase text-[9rem] leading-[0.8] tracking-tight font-bold font-founders' id={index === 1 ? "nextText" : ""}>{text}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 border-t-[1px] border-zinc-400 py-5 px-16 flex justify-between items-center font-montreal" id='lowerSection'>
                {["For public and private companies", "From the first pitch to IPO"].map((text, index) => (
                    <div className="text-xl font-ligh" key={text + index}>{text}</div>
                ))}
                <div className="start flex items-center gap-2">
                    <div className="px-5 py-2 border-2 border-zinc-400 text-xl font-light uppercase rounded-full">Start the Project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-2 border-zinc-600 rounded-full">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage