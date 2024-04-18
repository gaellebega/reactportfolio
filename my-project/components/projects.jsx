// import React from 'react'

// function Projects() {
//   return (
//     <div>projects</div>
//   )
// }

// export default Projects

// import React from 'react';

const Projects = () => {
  return (
 <div className="bg-gray-900">
 <section className='w-full max-w-6xl mx-auto px-4 '>
    {/* <div className="bg-gray-100 p-8 flex flex-center"> */}
      {/* <h2 className="text-2xl font-bold mb-8">My Portfolios</h2> */}
      
 <div className="w-full max-w-6xl mx-auto px-4 ">
           <h2 className="text-4xl font-semibold text-center text-gray-800">
            Some of my projects
          </h2>
        <p className="text-gray-600 text-center mt-4">
          what I have created
           </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8  w-full md:w-4/4 p-6  flex-col flex-grow  flex-center ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="project-1.jpg" alt="Project 1" className="h-48 w-full object-cover rounded-lg mb-6" />
          <h3 className="text-xl font-bold mb-2">Portfolio 1</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus nisi.
          </p>
          <a href="#" className="text-pink-600 hover:underline">View Portfolio</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="project-2.jpg" alt="Project 2" className="h-48 w-full object-cover rounded-lg mb-6" />
          <h3 className="text-xl font-bold mb-2">Portfolio 2</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus nisi.
          </p>
          <a href="#" className="text-pink-600 hover:underline">View Portfolio</a>
        </div>
        
      </div>
    </div>
    </section>
    </div>
  );
};

export default Projects;