import React from 'react'
import floral from "../../imag/floral_building.png"
import Image from 'next/image'
import Footer from '@/component/Footer'
import NavBar from '@/component/Navbar'
import TopHeader from '@/component/TopHeader'

const OurHistory = () => {
  return (
    <div className="bg-gray-100 w-full  ">
      <TopHeader />
      <NavBar />
      <div className="relative w-full h-64 overflow-hidden" >
              <div className="absolute p-6 m-3 inset-0 bg-cover bg-center"  >
                <Image 
                src={floral}
                alt="Curriculum Background"
                layout="fill"
                objectFit="cover"
                className="brightness-50 animate-zoomInOut"
                />
              
             </div>
             
             <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white" >Our History</h1>
              </div>
      
            </div>

            <div className="max-w-6xl mx-auto mb-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our History
            <span className="block w-16 h-1 bg-green-600 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-700  leading-relaxed">
            The school began its journey at <strong>6 Mathew Ojo Street, Governor Road, Ikotun</strong>, 
            founded by <strong>Mr. Oladeji Samuel Okanlawon</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Effective teaching and learning commenced on <strong>April 28, 2003</strong>, with an initial 
            enrollment of <strong>ten (10) students</strong> in the primary section.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            On <strong>February 8, 2004</strong>, the school relocated to its permanent site at 
            <strong> 19 Gabriel Adeyemi Street</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Floral Golden Heritage is a center for <strong>character molding</strong>, an 
            <strong> epitome of discipline</strong>, and a hub for <strong>academic excellence</strong>.
          </p>
        </div>

        
        <div className="relative w-full h-72 md:h-96">
          <Image 
            src="/image/gal7.png" 
            alt="School History"
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default OurHistory
