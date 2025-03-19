import Footer from "@/component/Footer";
import NavBar from "@/component/Navbar";
import TopHeader from "@/component/TopHeader";
import Image from "next/image";
import floral from "../../imag/floral_building.png"

const HeadOfSchool = () => {
  return (
    
    <section className=" w-full  ">
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
                   
                  
            
                  </div>
      <div className="text-left mt-15 mb-5">
        <h2 className="text-3xl  font-bold text-gray-800 relative inline-block">
          Head of School Message
          <span className="block w-16 h-1 bg-green-500 mt-2 mx-auto"></span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-40 mt-10 bg-stone-100 '>
        
              <div className='flex flex-col p-10 items-center'> 
              <div className='w-48 h-48 md-w-60 md:h-60 rounded-full overflow-hidden border-4 border-emerald-600'>
                  <Image
                  src="/image/dad.jpg"
                  alt="Head of School"
                  width={240}
                  height={240}
                  className="w-full rounded-full h-full object-cover" 
                  />
              </div>
              
              </div>
             
              <div className='md:w-3/5 mb-5 mt-10 text-center md:text-left'>
              <h2 className=' text-3xl font-bold text-[#2c6e49]'>
                  Dear Parent,
              </h2>

              <p className="text-gray-700 leading-relaxed">
            Welcome to Floral Golden Heritage! Our school is built on a strong foundation of 
            excellence, discipline, and character molding. Since our establishment, we have been 
            committed to nurturing young minds and preparing them for a bright future.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At our school, we foster a culture of innovation, leadership, and academic excellence. 
            Our dedicated staff ensures that every child is given the best opportunities to thrive 
            in all aspects of life.
          </p>
         
              <p className="mt-4 text-gray-700">
                  A school dedicated to nurturing the next generation with quality education, values, and leadership skills.
                  </p>
                  <p className="mt-2 text-gray-700">
                    We prepare and equip children for life, paying attention to their physical, spiritual, and emotional needs. Our aim is to provide a strong foundation where every child can thrive.
                  </p>
                  <p className="mt-4 font-semibold text-green-600">- Mr. Oladeji Samuel Okanlawon</p>
                  <p className="text-gray-500">Founder & Head of School</p>
                 
                   </div>
                   </div>
      <Footer />
    </section>
  );
};

export default HeadOfSchool;
