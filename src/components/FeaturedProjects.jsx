import React from 'react'
import Cards from './Cards'
import Button from './Button'

const FeaturedProjects = () => {
  return (
    <div className='w-full h-full py-28 bg-stone-100 text-zinc-900 flex flex-col justify-center items-center' data-scroll-speed="-1" data-scroll>
        <div className="w-full px-20 border-b border-zinc-300 pb-10">
            <h1 className="text-6xl font-montreal font-light">
                Featured Projects
            </h1>
        </div>
    
        <div className="mt-20">
            <Cards 
                cardTitle1='Cardboard Spaceship'
                cardTitle2='AH2 & Matt Horn'
                cardImage1='/SC.png'
                cardImage2='/Frame.png'
            />
        </div>
        {/* <div className="button flex justify-between items-center bg-zinc-800 py-4 px-8 rounded-full mt-10">
            <div className="text-white font-montreal text-lg">View All Case Studies</div>
            <div className="h-2 w-2 bg-white rounded-full ml-4"></div>
        </div> */}
        <Button text={"View All Case Studies"}/>
    </div>
  )
}

export default FeaturedProjects