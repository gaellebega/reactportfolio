// import React from 'react'
// import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile,faLocationDot,} from '@fortawesome/free-solid-svg-icons'
// import {faMobile} from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
  return (
    
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-teal-700 mb-4">
          Contact Us
        </h2>
        <p className="text-white text-center mb-8">
          We would love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center">
          {/* Contact Card: Call Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-teal-700">
                <i className="fas fa-mobile-alt text-5xl mb-4"><FontAwesomeIcon icon={faMobile} /></i>
                <h2 className="text-xl font-bold">Call Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">+(250) 0793440888</li>
              </ul>
            </div>
          </div>

          {/* Contact Card: Email Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-teal-700 ">
              {/* <MdEmail /> */}
                <i className="fas text-5xl mb-4"><FontAwesomeIcon icon={faEnvelope} /></i>
                <h2 className="text-xl font-bold">Email Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">
                  <a href="mailto:gaellebega@gmail.com" className="hover:underline">gaellebega@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card: Visit Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-teal-700">
                <i className="fas fa-map-marker-alt text-5xl mb-4"><FontAwesomeIcon icon={faLocationDot} /></i>
                <h2 className="text-xl font-bold">Visit Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">
                  Rwanda,Kigali
                </li>
              </ul>
            </div>
          </div> 
          <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form className="w-full max-w-md mx-auto">
            <textarea
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 mb-4"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
