import React from 'react'
import portfo from '../assets/portfolio/portfo.png';
const Portfolio = () => {
    const portfolio=[
        {
            id:1,
            src:portfo,
        },
        {
            id:2,
            src:portfo,
        },
        {
            id:3,
            src:portfo,
        },
        {
            id:4,
            src:portfo,
        },
        {
            id:5,
            src:portfo,
        },
        {
            id:6,
            src:portfo,
        },
    ]
  return (
    <div
    name="portfolio"
    className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p
                 className="text-4xl font-bold inline border-b-4 border-gray-500"
                >
                    Portforlio
                </p>
                <p className="py-6">Check out some of my work right here </p>
            </div>
           
                 <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" >
                 {portfolio.map(({id,src})=>(
                     <div key={id} className="shadow-md shadow-gray-600 rounded-lg" >
                        <img 
                            src={src} 
                            alt=""
                            className=" rounded-md duration-200 hover:scale-105" 
                         />
                        <div className="flex items-center justify-center">
                             <button className="w-1/2 px-6 py-3 m-4 duration-200"  >Demo</button>
                             <button className="w-1/2 px-6 py-3 m-4 duration-200">Code</button>
                         </div>
                    </div> 
                ))}
                </div>
                

           
        </div>
    </div>
  )
}

export default Portfolio