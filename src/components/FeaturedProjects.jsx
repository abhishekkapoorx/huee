import React from 'react'
import Cards from './Cards'
import Button from './Button'

const FeaturedProjects = () => {
  return (
    <div className='w-full h-full py-48 bg-stone-100 text-zinc-900 flex flex-col justify-center items-center z-0' data-speed="clamp(1)">
        <div className="w-full px-20 border-b border-zinc-300 pb-10">
            <h1 className="text-6xl font-montreal font-light">
                Featured Projects
            </h1>
        </div>
    
        <div className="mt-20">
            <Cards 
                cardTitle1='Brewed Essence'
                cardTitle2='Iconic Collections'
                cardImage1='/coffee.jpg'
                cardImage2='/eyeHospital.jpg'
            />
        </div>
        {/* <div className="button flex justify-between items-center bg-zinc-800 py-4 px-8 rounded-full mt-10">
            <div className="text-white font-montreal text-lg">View All Case Studies</div>
            <div className="h-2 w-2 bg-white rounded-full ml-4"></div>
        </div> */}
        <Button text={"View All Case Studies"} containerClasses={"my-10"}/>
    </div>
  )
}

export default FeaturedProjects