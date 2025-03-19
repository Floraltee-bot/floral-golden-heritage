"use client";
import { useState, useEffect, useRef } from "react";
import { IconDotsVertical } from "@tabler/icons-react";
import Newadmission from "./Newadmission";
import StudentLogin from "./StudentLogin";
import TeacherStaffLogin from "./TeacherStaffLogin";
import AdminLogin from "./Admin";



export default function Hamburger() {
  const [dropDownIcon, setDropDownIcon] = useState(false);
  const [showBatches, setShowBatches] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showYearbook, setShowYearbook] = useState(false);
  const [showNewadmission, setShowNewadmission] = useState (false);

  const containerRef = useRef(null);

  const handleBatchesClick = () => {
    setShowBatches(true);
    setShowRegistration(false);
    setDropDownIcon(false);
    setShowYearbook(false);
    setShowNewadmission(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    setShowBatches(false);
    setDropDownIcon(false);
    setShowYearbook(false);
    setShowNewadmission(false);
  };
  const handleYearbookClick = () => {
    setShowYearbook(true);
    setShowRegistration(false);
    setShowBatches(false);
    setDropDownIcon(false);
    setShowNewadmission(false);
  };
   const handleAdmissionClick = () => {
    setShowNewadmission(true);
    setShowRegistration(false);
    setShowBatches(false);
    setDropDownIcon(false);
    setShowYearbook(false);
   };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropDownIcon(false);
        setShowBatches(false);
        setShowRegistration(false);
        setShowYearbook(false);
        setShowNewadmission(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
  return (
    <div ref={containerRef} className="p-4">
      <aside className="ml-4 relative">
        <button className="font-extrabold" onClick={() => setDropDownIcon(!dropDownIcon)}>
          <IconDotsVertical size={30} />
        </button>
        {dropDownIcon && (
          <ul className="z-10 w-72 absolute left-0 mt-2 text-black h-auto bg-emerald-400 shadow-md rounded-lg transition-all duration-300">
            <li
              className="mb-4 pl-5 p-3 cursor-pointer  hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleBatchesClick}
            >
              Student login
            </li>
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleRegistrationClick}
            >
              Teacher or Staff
            </li>
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleYearbookClick}
            >
              Admin Login
            </li>
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleAdmissionClick}
            >
              New Admission
            </li>
          </ul>
        )}
      </aside>

      {showBatches && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-amber-100 text-black shadow-md rounded-lg transition-all duration-300">
          <h1> <StudentLogin/> </h1>
        </div>
      )}

      {showRegistration && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-amber-100 text-black shadow-md rounded-lg transition-all duration-300">
          <h1><TeacherStaffLogin /></h1>
        </div>
      )}

      {showYearbook && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-amber-100 text-black shadow-md rounded-lg transition-all duration-300">
          <h1><AdminLogin /></h1>
        </div>
      )}

{showNewadmission && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-amber-100 text-black shadow-md rounded-lg transition-all duration-300">
          <h1><Newadmission /> </h1>
        </div>
      )}
    </div>
  );
}