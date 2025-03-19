import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Image
              src="/image/logoghs.jpg" 
              alt="Floral Golden Heritage Logo"
              width={80}
              height={80}
            />
            <h2 className="text-lg font-bold">Floral Golden Heritage</h2>
          </div>
          <p className="mt-4 max-w-sm text-gray-300">
            We’re a dynamic and supportive community dedicated to empowering students to achieve their goals. 
            We foster academic excellence, creativity, and critical thinking in a positive and inclusive environment.
          </p>
        </div>

        
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="../About2" className="hover:underline">About</Link></li>
            <li><Link href="../Contact" className="hover:underline">Contact</Link></li>
            <li><Link href="../Admission" className="hover:underline">Admissions</Link></li>
          </ul>
        </div>

      
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">Email:heritagetek@gmail.com</p>
          <p>Phone: +234 8023123730</p>
          <p>Address:19, Gabriel Adeyemi Street, Off Governors Road Ikotun, Lagos-State.</p>
        </div>
      </div>

    
      <div className="flex justify-center space-x-6 mt-8">
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </Link>
      </div>

      
      <div className="text-center text-sm border-t border-gray-600 mt-6 pt-4">
        &copy; {new Date().getFullYear()} Floral Golden Heritage. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
