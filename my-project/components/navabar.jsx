
const Navabar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">.BEGA</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            home
          </a>
          <a href="portfolios" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Projects
          </a>
          <a href="projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            protfolios
          </a>
        </div>
        <div>
          <a href="contacts" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-gray-700 font-bold py-2 px-4 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;