"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import aboutImg from "../../../public/image/about.jpg"
import NavBar from "@/component/Navbar"
import Footer from "@/component/Footer"
import TopHeader from "@/component/TopHeader"




const page = () => {
  return (
        
    <div className="w-full bg-gray-100">
      <TopHeader />
      <NavBar />
     
      <motion.div
        className="relative  p-6 m-3 h-[50vh] overflow-hidden"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/image/floral_building.png" 
          alt="Floral Golden Heritage School"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </motion.div>

      <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              WELCOME TO FLORAL GOLDEN HERITAGE SCHOOL
            </h2>
           
            <p className="text-gray-700 text-lg leading-relaxed">
              We are delighted that you are considering Floral Golden Heritage School for your child's education. Our school is committed to academic excellence, character development, and fostering a love for learning in a nurturing environment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              At Floral Golden Heritage, we believe that education is the foundation of a brighter future. We provide top-tier learning experiences that develop each child's full potential and prepare them to excel in all areas of life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our school offers programs from Crèche to Primary classes, ensuring a seamless transition through early childhood education. Our highly qualified and dedicated teaching staff provide a safe and intellectually stimulating environment where students grow academically, morally, and socially.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Over the years, we have maintained a tradition of excellence, instilling high moral values and social responsibility in our students.
            </p>
          </div>

          
          <div className="flex justify-center">
            <Image
              src={aboutImg}
              alt="Floral Golden Heritage School"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
              priority
            />
          </div>  
        </div>
      </div>
    </div>

    <Footer />

    </div>
  )
}

export default page
