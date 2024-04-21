// import React from "react";
// import home from "./components/Home";
// import Navabar from "./navabar"
// import React from 'react'

// import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 flex items-center">
        
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 w-1/2 ">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Welcome!
              <strong className="block font-extrabold text-teal-500"> Explore my Journey. </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Welcome to my portfolio! Here, you'll find a curated collection of my creative endeavors and professional accomplishments.
             As you explore, I invite you to discover the journey behind each project and get to know me better.
             Step inside and immerse yourself in my world of creativity and innovation. Whether you're here
             for inspiration, to collaborate, or simply to learn more about my work, I'm thrilled to have you join me on this digital showcase.!
            </p>
            
          </div>
        </div>
        <div className=" w-1/2">
                <img src="/home.png" alt="image" className=""/>
        </div>
    </div>
  );
};

export default Home;