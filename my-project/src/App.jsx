// import React from 'react'
 import Projects from "../components/projects"
import Navabar from "../components/navabar";
// import Portfolios from  "../components/portfolios"
import Home from "../components/Home"
import Footer from "../components/footer"
import Contacts from "../components/contacts"
import {BrowserRouter as Router ,Routes, Route} from  "react-router-dom";
import Portfolios from "../components/portfolios";



function App() {
  return (
    <>
    <div>
     
      <Navabar/>
      {/* <Home/>
      <Portfolios/>
      <Projects/>
      <Contacts/>
      <Footer/> */}
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/projects"  element={<Projects/>}/>
          <Route path="/portfolios"  element={<Portfolios/>}/>
          <Route path="/contacts"  element={<Contacts/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
    </>
  )
}

export default App