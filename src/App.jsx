import './App.css'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import Navbar from './assets/Components/Navbar/Navbar'
import Jobs from './assets/Components/Jobs/Jobs'
import Services from './assets/Components/Services/Services'
import AboutUs from './assets/Components/AboutUs/AboutUs'
import Footer from './assets/Components/Footer/Footer'
import { useEffect , useState } from 'react'
import ContactUs from './assets/Components/ContactUs/ContactUs'
import Review from './assets/Components/Review/Review'
import JobsDetails from './assets/Components/JobsDetails/JobsDetails'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'


function App() {



  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

          <Route path = "/" element = {<HeroSection/> }/>
          <Route path = "/jobs" element = { <Jobs/> }/>
          <Route path = "/company" element = {<Jobs/> }/>
          <Route path = "/services" element = {<Services/> }/>
          <Route path = "/aboutus" element = {<AboutUs/> }/>
          <Route path = "/contactus" element = {<ContactUs /> }/>
          <Route path = "/jobsdetails" element = {<JobsDetails/>}/>
     
          
         
        
        </Routes>
       
       
        <Footer />
      
       
        
      



      </Router>
    </>
  )
}

export default App
