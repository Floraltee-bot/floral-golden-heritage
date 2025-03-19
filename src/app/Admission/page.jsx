"use client"
import Footer from '@/component/Footer'
import NavBar from '@/component/Navbar'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TopHeader from '@/component/TopHeader'

const Admission = () => {
  return (
    <div className="w-full">
      <TopHeader />
      <NavBar />
      <motion.div
        className="relative w-full h-[50vh] overflow-hidden"
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

     <section className="text-center  mb-8">
     
        <h1 className="text-3xl font-bold mb-10 mt-10 text-green-700">Admission Process</h1>
        <p className="text-gray-600 mt-2">
          Welcome to Floral Golden Heritage Nursery and Primary School! Our admission process is simple and designed to help students transition smoothly into our learning environment.
        </p>
      </section>

      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Admission Requirements</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Completed application form</li>
          <li>Copy of birth certificate</li>
          <li>Passport-sized photographs</li>
          <li>Previous academic records (if applicable)</li>
          <li>Medical report</li>
        </ul>
      </section>

      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Admission Process</h2>
        <ol className="list-decimal pl-5 mt-2 text-gray-700">
          <li>Fill out the online application form below.</li>
          <li>Submit required documents.</li>
          <li>Attend an entrance assessment (if required).</li>
          <li>Receive an admission confirmation.</li>
          <li>Complete the enrollment process.</li>
        </ol>
      </section>

      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Application Form</h2>
        <form className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter full name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded-lg" placeholder="Enter phone number" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Class Applying For</label>
            <select className="w-full p-2 border rounded-lg" required>
              <option value="">Select Class</option>
              <option value="Creche">Creche</option>
              <option value="Playgroup">Playgroup</option>
              <option value="Nursery">Nursery</option>
              <option value="Primary">Primary</option>
            </select>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Submit Application
          </button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Admission
