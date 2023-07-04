import React from 'react'
import html from '../assets/html-5.png';
import mysql from '../assets/mysql.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import php from '../assets/php.png';
import javascript from '../assets/java-script.png';
const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            name:"HTML",
            style:"shadow-orange-500",
        },
        {
            id:2,
            src:css,
            name:"CSS",
            style:"shadow-blue-500",
        },
        {
            id:3,
            src:javascript,
            name:"JavaScript",
            style:"shadow-yellow-500",
        },
        {
            id:4,
            src:react,
            name:"React",
            style:"shadow-blue-600",
        },
        {
            id:5,
            src:php,
            name:"PHP",
            style:"shadow-pink-400",
        },
        {
            id:6,
            src:mysql,
            name:"MYSQL",
            style:"shadow-white",
        },

    ]
  return (
    <div name="experience" className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p 
                    className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Experience
                </p>
                <p className="py-6">These are technologies I've worked with </p>
            </div>
            <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center" >
                {techs.map(({id,name,style,src})=>(
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500  rounded-lg ${style}`}
                    >
                        <img
                        className="w-20 mx-auto"
                        src={src}
                        alt=""
                        />
                        <p className="mt-4">{name}</p>
                    </div>                    

                ))}

            </div>

        </div>

    </div>
  )
}

export default Experience