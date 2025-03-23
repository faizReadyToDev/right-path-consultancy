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
import JobsDetails from './assets/Components/Amazon/Amazon'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Company from './assets/Components/Company/Company'
import FlipkartDetails from './assets/Components/FlipkartDetails/FlipkartDetails'
import Blinkit from './assets/Components/Blinkit/Blinkit'
import Nobroker from './assets/Components/Nobroker/Nobroker'
import TechnicalSupportSpecialist from './assets/Components/Teleperformance/Teleperformance'
import Swiggy from './assets/Components/Swiggy/Swiggy'
import Zomato from './assets/Components/Zomato/Zomato'
import Datamark from './assets/Components/Datamark/Datamark'
import Wishup from './assets/Components/Wishup/Wishup'
import FreshPrint from './assets/Components/FreshPrint/FreshPrint'
import Amazon from './assets/Components/Amazon/Amazon'
import Teleperformance from './assets/Components/Teleperformance/Teleperformance'
import ScrollToTop from './assets/Components/ScrollToTop/ScrollToTop'


function App() {



  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>

          <Route path = "/" element = {<HeroSection/> }/>
          <Route path = "/jobs" element = {<Company/> }/>
          <Route path = "/company" element = { <Company/> }/>
          <Route path = "/services" element = {<Services/> }/>
          <Route path = "/aboutus" element = {<AboutUs/> }/>
          <Route path = "/contactus" element = {<ContactUs /> }/>
          <Route path = "/amazon" element = {<Amazon/>}/>
          <Route path = "/flipkart" element = {<FlipkartDetails/>}/>
          <Route path = "/blinkit" element = {<Blinkit/>}/>
          <Route path = "/swiggy" element = {<Swiggy/>}/>
          <Route path = "/teleperformance" element = {<Teleperformance/>}/>
          <Route path = "/zomato" element = {<Zomato/>}/>
          <Route path = "/freshprint" element = {<FreshPrint/>}/>
          <Route path = "/datamark" element = {<Datamark/>}/>
          <Route path = "/nobroker" element = {<Nobroker/>}/>
          <Route path = "/wishup" element = {<Wishup/>}/>
     
         
        
        </Routes>
       

        <Footer />
       
      
      
       
        
      



      </Router>
    </>
  )
}

export default App
