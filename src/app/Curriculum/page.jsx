
import Image from 'next/image'
import floral from '../../imag/floral_building.png'
import NavBar from '@/component/Navbar'
import Footer from '@/component/Footer'
import TopHeader from '@/component/TopHeader'

const Curriculum = () => {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <div className="relative w-full h-64 overflow-hidden" >
        <div className="absolute p-6 m-3  inset-0 bg-cover bg-center "  >
          <Image 
          src={floral}
          alt="Curriculum Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50 animate-zoomInOut"
          />
        
       </div>
       
       <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white" >Our Curriculum</h1>
        </div>

      </div>

      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700">Overview</h2>
          <p className="text-gray-700 mt-2">
            Our curriculum is designed to foster creativity, critical thinking, and holistic development. We integrate modern teaching methodologies with traditional values to provide a comprehensive education.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700">Subjects Offered</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Mathematics</li>
            <li>English Language</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Creative Arts</li>
            <li>Physical Education</li>
            <li>French (for advanced learners)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700">Teaching Methodology</h2>
          <p className="text-gray-700 mt-2">
            We adopt a learner-centered approach that includes interactive learning, hands-on activities, group discussions, and technology integration to enhance student engagement and understanding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700">Extracurricular Activities</h2>
          <p className="text-gray-700 mt-2">
            Our students participate in various extracurricular activities such as music, drama, robotics, and sports to build essential life skills and foster teamwork and leadership.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Curriculum
