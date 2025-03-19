import React from "react"
import NavBar from "@/component/Navbar"
import EmblaCarousel from "@/component/EmblaCarousel"
import "../component/css/embla.css"
import Outlet from "@/component/Outlet";
import Footer from "@/component/Footer";
import TopHeader from "@/component/TopHeader";




const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


const App = () => (
  <div>
    <TopHeader />
    <NavBar />
    <EmblaCarousel slides={SLIDES} option={OPTIONS} />
    <Outlet />
    <Footer />
    
    
    
  </div>
)
export default App