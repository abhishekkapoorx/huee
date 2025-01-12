import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import Button from './Button'

const About = () => {
  return (
    <div className='w-full py-28 px-16 abg-[#CDEA68] bg-[#f1efe3] rounded-t-3xl text-zinc-900' data-speed="clamp(0.95)">
      <h1 className='font-montreal text-6xl text-zinc-900 max-w-[80vw] leading-none'>
      Huee is a strategic design agency that helps innovative businesses <span className="underline">secure funding</span>, <span className="underline">sell prod­ucts</span>, <span className="underline">ex­plain com­plex ideas</span>, and <span className="underline">attract great fortunes</span>.
      </h1>

      <div className="mt-36 border-t border-zinc-900 py-4 grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-normal font-montreal text-7xl">
            Our approach:
          </h2>
          <Button text="Read More" containerClasses={"mt-10"}/>

        </div>
        <div>
          <div className="w-full bg-[url('/womenLookingDown.jpg')] transform scale-x-[-1] h-[40rem] rounded-2xl bg-contain bg-no-repeat bg-center"></div>
        </div>
      </div>
    </div>
  )
}

export default About