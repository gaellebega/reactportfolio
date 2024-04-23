// import React from 'react'
const Projects = () => {
  return (
    <div className="bg-gray-900">
      <section className="w-full max-w-6xl mx-auto px-4 pb-16">
        <div className="w-full max-w-6xl mx-auto px-4 pt-20">
          <h2 className="text-4xl font-semibold text-center text-teal-600">
            Some of my portfolios
          </h2>
          <p className="text-white text-center mt-4">
            Discover what I have created
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="pot1.png"
                alt="Project 1"
                className="h-48 w-full object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Portfolio 1</h3>
              <p className="text-gray-700 mb-4">
                this is my first portfolio created with using html and css.
              </p>
              <a href="https://gaellebega.github.io/Portifolio1/" className="text-teal-600 hover:underline">
                View Portfolio
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="pot2.png"
                alt="Project 2"
                className="h-48 w-full object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Portfolio 2</h3>
              <p className="text-gray-700 mb-4">
                this is my second potfolio created using html, tailwindcss and javascript.
              </p>
              <a href="https://myportfolio-9wi3.onrender.com" className="text-teal-600 hover:underline">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
