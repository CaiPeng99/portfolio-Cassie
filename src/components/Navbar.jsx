import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a
        href="https://www.linkedin.com/in/cai-peng-89407a19a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
      <FaLinkedin/> 
      </a>
      <a
        href="https://github.com/CaiPeng99"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700"
        >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/cai_peng_pcpc/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500"
      >
        <FaInstagram />
      </a>
    </div>
  </nav>
}

export default Navbar
