// import React from "react";
// import home from "./components/Home";
// import Navabar from "./navabar"
// import React from 'react'

// import React from 'react';

const Home = () => {
  return (
    <div>
      <section  className="relative bg-cover  bg-center bg-no-repeat  landscape: bg-[url('https://i.pinimg.com/564x/16/96/9b/16969bcdbf91e1bc121a2fb0cf59e468.jpg')]" >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-teal-500"> Forever Home. </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Welcome to my portfolio! Here, you'll find a curated collection of my creative endeavors and professional accomplishments. As you explore, I invite you to discover the journey behind each project and get to know me better.

Step inside and immerse yourself in my world of creativity and innovation. Whether you're here for inspiration, to collaborate, or simply to learn more about my work, I'm thrilled to have you join me on this digital showcase.!
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="#"
                className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;