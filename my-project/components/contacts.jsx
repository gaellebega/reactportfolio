// import React from 'react'

function contacts() {
  return (
       <div className="bg-gray-200 py-12">
        <div className="w-full max-w-6xl mx-auto px-4">
           <h2 className="text-4xl font-semibold text-center text-gray-800">
            Contact Us
          </h2>
    <p className="text-gray-600 text-center mt-4">
      We would love to hear from you!
    </p>
    <div className="flex flex-wrap mt-12">
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
            <i className="fas fa-mobile-alt text-5xl"></i>
            <h2 className="text-xl">Call Us</h2>
          </div>
          <ul className="w-full text-center text-sm">
            <li className="border-b py-4">+(250) 0793440888</li>
        
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
            <i className="fas fa-envelope text-5xl"></i>
            <h2 className="text-xl">Email Us</h2>
          </div>
          <ul className="w-full text-center text-sm">
            <li className="border-b py-4">
              <a href="mailto:gaellebega@gmail.com" className="hover:underline">gaellebega@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
            <i className="fas fa-map-marker-alt text-5xl"></i>
            <h2 className="text-xl">Visit Us</h2>
          </div>
          <ul className="w-full text-center text-sm">
            <li className="border-b py-4">
              kigali<br />
              karuruma
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  </div>
</div>
  )
}

export default contacts
