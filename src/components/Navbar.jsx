import React, { useState } from 'react'
import logo from '../assets/diaLogo.png'

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='  py-5 bg-[#dcebf8] sticky'>
        <div className="flex justify-between container">
          <div className="">
            <a href="#">
              <img className='h-[40px] sm:h-[50px]' src={logo} alt="" />
            </a>
          </div>
          <div className="flex ">
            <ul className='sm:flex hidden leading-[36px] sm:text-[16px] lg:text-[20px] font-normal'>
              <li className='hover:text-[#753899]'><a href="#">Home</a></li>
              <li className='mx-2'>|</li>
              <li className='hover:text-[#753899]'><a href="#About">About US</a></li>
              <li className='mx-2'>|</li>
              <li className='hover:text-[#753899]'><a href="#Products">Our Products</a></li>
              <li className='mx-2'>|</li>
              <li className='hover:text-[#753899]'><a href="#Testimonials">Testimonials</a></li>
              <li className='mx-2'>|</li>
              <li className='hover:text-[#753899]'><a href="#Contact">Contact Us</a></li>
            </ul>
            <div className="relative">
              <button
                onClick={() => setOpen(true)}
                className="sm:hidden text-2xl  text-[#2867B4]"
              >
                <i class="fa-solid fa-bars"></i>
              </button>

              {open && (
                <div
                  className="fixed inset-0 sm:hidden bg-white/50 z-40"
                  onClick={() => setOpen(false)}
                ></div>
              )}

              <div
                className={`fixed top-0 left-0 h-full w-[75%] sm:hidden bg-[#dcebf8] z-50 transform ${open ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-500 ease-in-out`}
              >
                <div className="p-4 flex justify-between items-center border-b border-[#2867B4]">
                  <a href="#">
                    <img className='h-[40px] sm:h-[50px]' src={logo} alt="" />
                  </a>
                  <button onClick={() => setOpen(false)} className="text-2xl text-[#2867B4]"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <ul className="pt-4 space-y-4 text-xl">
                  <a href="#"> <li onClick={() => setOpen(false)} className='p-3 border-b-2 border-[#2867B4]'>Home</li></a>

                  <a href="#About"><li onClick={() => setOpen(false)} className='p-3 border-b-2 border-[#2867B4]'>About US</li></a>

                  <a href="#Products"> <li onClick={() => setOpen(false)} className='p-3 border-b-2 border-[#2867B4]'>Our Products</li></a>

                  <a href="#Testimonials"> <li onClick={() => setOpen(false)} className='p-3 border-b-2 border-[#2867B4]'>Testimonials</li></a>

                  <a href="#Contact"><li onClick={() => setOpen(false)} className='p-3 border-b-2 border-[#2867B4]'>Contact Us</li></a>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2867B4] h-[1.5px]"></div>
    </>
  )
}

export default Navbar