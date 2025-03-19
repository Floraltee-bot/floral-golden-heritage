"use client"

import Footer from "@/component/Footer";
import NavBar from "@/component/Navbar";
import TopHeader from "@/component/TopHeader";
import { FaMusic, FaUserGraduate, FaBaby, FaBook, FaUsers, FaChalkboardTeacher } from "react-icons/fa";


const schoolSections = [
  {
    title: "Creche",
    description: "A nurturing environment for infants and toddlers, focusing on early childhood development and care.",
    icon: <FaBaby className="text-green-600 text-4xl" />
  },
  {
    title: "Nursery Section",
    description: "A foundation for learning through play-based activities, phonics, and interactive learning.",
    icon: <FaBook className="text-green-600 text-4xl" />
  },
  {
    title: "Primary Section",
    description: "A structured curriculum designed to build critical thinking, creativity, and academic excellence.",
    icon: <FaUserGraduate className="text-green-600 text-4xl" />
  },
  {
    title: "Music Club",
    description: "Encouraging students to explore their musical talents through instruments, singing, and theory.",
    icon: <FaMusic className="text-green-600 text-4xl" />
  },
  {
    title: "Leadership Club",
    description: "Developing leadership skills through mentorship, teamwork, and community service activities.",
    icon: <FaUsers className="text-green-600 text-4xl" />
  },
  {
    title: "Extracurricular Activities",
    description: "Including drama, arts, sports, and robotics to enhance creativity and teamwork.",
    icon: <FaChalkboardTeacher className="text-green-600 text-4xl" />
  }
];

const OurSchool = () => {
  return (
    
    <section className="bg-gray-100  w-full  ">
      <TopHeader />
      <NavBar />

     {/* <div className="relative w-full h-64 overflow-hidden" >
                  <div className="absolute p-6 m-3 inset-0 bg-cover bg-center"  >
                    <Image 
                    src={soul}
                    alt="Curriculum Background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50 animate-zoomInOut"
                    />
                  
                 </div>
                 
                
                </div> */}

      <div className="max-w-6xl mb-10 mt-15 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
          Our School
          <span className="block w-16 h-1 bg-green-600 mt-2 mx-auto"></span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Our school provides a well-rounded education with a focus on academics, leadership, and creativity.
        </p>
      </div>

  
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schoolSections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            {section.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{section.title}</h3>
            <p className="text-gray-600 mt-2">{section.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default OurSchool;
