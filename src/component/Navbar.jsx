
"use client";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../public/image/logoghs.jpg"
import Hamburger from "./Hamburger";


export default function NavBar() {
  const [batchesOpen, setBatchesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [yearbookOpen, setYearbookOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setBatchesOpen(false);
        setCoursesOpen(false);
        setYearbookOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <nav
      ref={containerRef}
      className=" p-0 text-slate-100 m-2 stroke-black bg-emerald-600 "
    >
      <div className="flex items-center gap-10 justify-items-start capitalize font-extrabold h-20">
        <div className="relative">
          <Hamburger stroke={2} width={60} height={60} />
        </div>
        {/* <div>
          <Link className="flex items-center gap-8" href="/">
            <span className="text-emerald-600">
             <Image src={logo}
             alt="image"
             width={100}
             height={100}
             className="rounded-xl shadow-lg"/>
            </span>

            <span className="text-2xl uppercase">
              <h1>Floral Golden Heritage </h1>
            </span>
          </Link>
        </div> */}
        <div className="relative">
          <Link className="px-3 hover:text-emerald-900 " href="/">
            Home
            
          </Link>
          <Link 
          onClick={() => setBatchesOpen(!batchesOpen)}
           className="px-3 hover:text-emerald-900 inline-flex items-center"   href="./About2">
            Discover
            {/* <span>
              <IconChevronDown size={30} />
            </span> */}
            
          </Link>
          <Link
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href=""
          >
            What we offer
            {/* <span>
              <IconChevronDown size={30} />
            </span> */}
          </Link>
          <Link
            
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href="../Contact"
          >
            Contact
            
          </Link>

          <Link className="px-3 hover:text-emerald-900 inline-flex items-center"
            href="" >
              School Portal
          </Link>
          <Link
            onClick={() => setYearbookOpen(!yearbookOpen)}
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href="../Admission"
          >
            Admission
            {/* <span>
              <IconChevronDown size={30} />
            </span> */}
          </Link>

          {batchesOpen && (
            <div className="absolute left-20 rounded-lg mt-2 z-10">
              <ul>
                <li>
                  <Link
                    href="../About2"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="../HeadSchool"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Head of School Message
                  </Link>
                </li>
                <li>
                  <Link
                    href="../OurHistory"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Our History
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {coursesOpen && (
            <div className="absolute left-50 mt-2 z-10">
              <ul>
              <li>
              <Link
                href="../Curriculum"
                className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-900"
              >
                Our Curriculum
              </Link>
              <li>
              <Link
                href="../School"
                className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-900"
              >
                Our School
              </Link>
              </li>
              </li>
              </ul>
              
            </div>
          )}
          
          {yearbookOpen && (
            <div className="absolute right-0 mt-2 z-10">
              <ul>
                <li>
                  <Link
                    href=""
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="../pages/YearbookB"
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Class of 2025
                  </Link>
                </li>
                <li>
                  <Link
                    href="../pages/YearbookC"
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Class of 2026
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
