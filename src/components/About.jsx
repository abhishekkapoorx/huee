import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='w-full py-28 px-16 bg-[#CDEA68] rounded-t-3xl text-zinc-900' data-scroll-speed="-1.5" data-scroll>
      <h1 className='font-montreal text-6xl text-zinc-900 max-w-[80vw] leading-none'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds</span>, <span className="underline">sell prod­ucts</span>, <span className="underline">ex­plain com­plex ideas</span>, and <span className="underline">hire great peo­ple</span>.
      </h1>

      <div className="mt-36 border-t border-zinc-900 py-4 grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-normal font-montreal text-7xl">
            Our approach:
          </h2>
          <button className="h-20 w-60 mt-8 rounded-full py-4 px-8 bg-zinc-900 text-white uppercase text-xl font-montreal font-light flex justify-between items-center gap-4">Read More
            <div className="rounded-full hover:w-8 hover:h-8 w-3 h-3 hover:m-0 mr-3 bg-white relative right-0 transition-all ease-in-out">
              <div className="arr rotate-45 hidden w-full h-full transform transition-all ease-in-out text-black">
                <FaArrowUpLong color='black' />
              </div>
            </div>
          </button>

        </div>
        <div>
          <div className="w-full bg-[url('/Homepage.jpg')] h-[40rem] rounded-2xl bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  )
}

export default About