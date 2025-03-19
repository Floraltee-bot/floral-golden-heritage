import Footer from "@/component/Footer";
import NavBar from "@/component/Navbar";
import TopHeader from "@/component/TopHeader";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full">
     <TopHeader />
      <NavBar />
      <div className="text-center mb-8">
        <h2 className="text-3xl m-4 font-bold text-gray-800 relative inline-block">
          Contact Us
          <span className="block w-16 h-1 bg-green-500 mt-2 mx-auto"></span>
        </h2>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        <div className="space-y-6 pl-6 ">
          
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">Get in Touch</h3>
            <p className="text-lg text-gray-700">We'd love to hear from you. Reach out to us for any inquiries or assistance.</p>
          </div>

          <div className="space-y-2 text-lg text-gray-800">
            <p><strong>Email:</strong> info@floralgoldenheritage.com</p>
            <p><strong>Phone:</strong> +234 812 345 6789</p>
            <p><strong>Address:</strong> 19 Gabriel Adeyemi Str, Ikotun, Lagos</p>
          </div>

          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-green-600 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-2xl"><FaLinkedin /></a>
          </div>
        </div>

        
        <div className="bg-gray-100 p-6 m-9 pr-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
