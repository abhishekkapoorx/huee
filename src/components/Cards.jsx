import React, { useState } from 'react'
import Card from './Card'
import { gsap } from 'gsap'
import SplitText from "gsap-trial/SplitText" 
import { useGSAP } from '@gsap/react'


const Cards = ({ cardTitle1, cardTitle2, cardImage1, cardImage2 }) => {
    const [selectedText, setSelectedText] = useState("")
    
    gsap.registerPlugin(SplitText);
    useGSAP(() => {
        let split = new SplitText("#selectedText", {type: "chars"});
        const tl = gsap.timeline();
        tl.from(split.chars, {
            duration: 0.5, 
            y: 100, 
            autoAlpha: 0, 
            stagger: 0.05
          });
        

    }, [selectedText]);
    return (
        <div className="flex flex-col items-center justify-center" data-scroll-speed="0.5" data-scroll>
            <div className="grid grid-cols-2 gap-10 px-20">
                <Card title={cardTitle1} imgSrc={cardImage1} setSelectedText={setSelectedText} selectedText={selectedText} />
                <Card title={cardTitle2} imgSrc={cardImage2} setSelectedText={setSelectedText} selectedText={selectedText} />
            </div>
            <div className="absolute touch-none select-none overflow-hidden">
                    <h1 className="font-founders font-black uppercase text-[9rem] text-[#cdea68] text-center touch-none select-none" id='selectedText'>
                        {selectedText}
                    </h1>

            </div>
        </div>

    )
}

export default Cards