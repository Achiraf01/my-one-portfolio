import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white py-4">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form method="post" action="https://getform.io/f/fea80eba-4ba5-4c84-8c54-6aa19d7ed244" className=" flex flex-col w-full md:w-1/2"> 
                    <input
                     type="text" 
                     name="name"
                     placeholder="Enter your name"
                     className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outiline-none"
                    />
                    <input
                     type="text" 
                     name="email"
                     placeholder="Enter your email"
                     className=" my-4 sp-2 bg-transparent border-2 rounded-md text-white focus:outiline-none"
                    />
                    <textarea 
                     name="message"
                     rows="10"
                     placeholder="Enter your text"
                     className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outiline-none"
                    ></textarea>
                    <button 
                        className=" my-4 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto flex items-center hover:scale-110 duration-500 rounded-md"
                    >Let's talk
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact