import React, { useRef, useState, useEffect } from 'react';

const Eyes = () => {
    const [angleR, setAngleR] = useState(0);
    const [angleL, setAngleL] = useState(0);

    const [translateL, setTranslateL] = useState({ x: 0, y: 0 });
    const [translateR, setTranslateR] = useState({ x: 0, y: 0 });

    const eyeBallR = useRef(null);
    const eyeBallL = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (eyeBallR.current && eyeBallL.current) {
                const eyeBallRRect = eyeBallR.current.getBoundingClientRect();
                const eyeBallLRect = eyeBallL.current.getBoundingClientRect();

                const centerX_R = eyeBallRRect.left + eyeBallRRect.width / 2;
                const centerY_R = eyeBallRRect.top + eyeBallRRect.height / 2;
                const centerX_L = eyeBallLRect.left + eyeBallLRect.width / 2;
                const centerY_L = eyeBallLRect.top + eyeBallLRect.height / 2;

                const deltaX_R = clientX - centerX_R;
                const deltaY_R = clientY - centerY_R;
                const deltaX_L = clientX - centerX_L;
                const deltaY_L = clientY - centerY_L;

                const angleR = Math.atan2(deltaY_R, deltaX_R) * (180 / Math.PI);
                const angleL = Math.atan2(deltaY_L, deltaX_L) * (180 / Math.PI);

                setAngleR(angleR - 180);
                setAngleL(angleL - 180);

                setTranslateR({ x: deltaX_R / 20, y: deltaY_R / 20 });
                setTranslateL({ x: deltaX_L / 20, y: deltaY_L / 20 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs once on mount.

    return (
        <div className='relative -z-10 w-full bg-[url("./Top-Viewbbcbv-1-scaled.jpg")] h-screen bg-cover bg-center flex items-center justify-center' data-speed="clamp(1)">
            <div className="eyebox rounded-full flex items-center justify-center gap-10">
                <div className="bg-white rounded-full h-72 w-72 flex items-center justify-center">
                    <div
                        style={{ transform: `translate(${translateL.x}px, ${translateL.y}px)` }}
                        className="bg-zinc-900 w-2/3 h-2/3 rounded-full flex items-center justify-center"
                        ref={eyeBallL}
                    >
                        <div
                            style={{ transform: `rotate(${angleL}deg)` }}
                            className={`line w-full`}
                        >
                            <div className="h-8 w-8 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-full h-72 w-72 flex items-center justify-center">
                    <div
                        style={{ transform: `translate(${translateR.x}px, ${translateR.y}px)` }}
                        className="bg-zinc-900 w-2/3 h-2/3 rounded-full flex items-center justify-center"
                        ref={eyeBallR}
                    >
                        <div
                            style={{ transform: `rotate(${angleR}deg)` }}
                            className={`line w-full`}
                        >
                            <div className="h-8 w-8 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
