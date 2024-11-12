
import React from "react";

import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div><footer className="bg-gray-900">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Portfolio 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
       
        </a>
       
        <a  className="ml-3 text-gray-500" href="https://www.instagram.com/ahmedrao987/?next=%2F" target="/_blank">
        <FaInstagram className="text-3xl hover:text-[#a71a71]"  />
        </a>
       
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer

