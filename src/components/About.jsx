import React from 'react'

function About() {
  return (
    <div name="about" className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>    
            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel nostrum non facere, architecto quidem quo possimus, praesentium porro quibusdam, labore ratione aperiam ipsa doloremque doloribus corrupti quam culpa animi!            
            </p>
            <br/>
            <p className="text-xl"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo obcaecati assumenda? Placeat distinctio eveniet, ab cum amet sequi consectetur magni eligendi nihil voluptatibus quae. Asperiores repellat a nobis suscipit!
            </p>
        </div>   
    </div>
  )
}

export default About