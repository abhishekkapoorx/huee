import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import Button from './Button'

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
          <Button text="Read More" />

        </div>
        <div>
          <div className="w-full bg-[url('/Homepage.jpg')] h-[40rem] rounded-2xl bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  )
}

export default About