import React from 'react'

const Card = ({title, imgSrc, setSelectedText}) => {
  return (
    <div className='' onMouseOver={() => setSelectedText(title)} onMouseOutCapture={() => setSelectedText("")}>
        <div className="header flex justify-start items-center font-montreal font-light text-xl uppercase">
            <div className="mr-4 h-3 w-3 bg-zinc-900 rounded-full"></div>
            {title}
        </div>
        <div className="rounded-xl mt-8 w-full overflow-hidden shadow-lg hover:scale-95 transition-all ease-in-out hover:blur-0 blur-sm">
            <img src={imgSrc} alt={title} className="w-full rounded-xl bg-cover bg-center scale-100 hover:scale-110 max-h-[40rem]  transition-all ease-in-out" /> 
        </div>
    </div>
  )
}

export default Card