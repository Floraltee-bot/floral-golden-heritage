"use client"
import { useState } from "react";

const AdmissionForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section className="p-8 absolute m-10 inset-0 z-1">
      
      <form onSubmit={handleSubmit} className="bg-white w-96 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">
          New Admission Form
        </h2>
        <span className="block w-20 h-1 bg-green-500 mt-2 mx-auto"></span>
        
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Date of Birth</label>
          <input type="date" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
          </div>
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Home Address</label>
          <textarea className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" rows="2" required></textarea>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Parent/Guardian Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Guardian's Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Guardian's Phone</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
            </div>
          </div>
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Previous School Attended</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required />
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Class Applying For</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" required>
            <option value="">Select Class</option>
            <option value="Creche">Creche</option>
            <option value="Nursery">Nursery</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
          </select>
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Upload Student's Picture</label>
          <input type="file" accept="image/*" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" onChange={handleFileChange} required />
          {selectedFile && <p className="mt-2 text-green-600">File selected: {selectedFile.name}</p>}
        </div>

        
        <button type="submit" className="w-full bg-green-600 m-5 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
          Submit Admission Form
        </button>
      </form>
    </section>
  );
};

export default AdmissionForm;
