import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Product from '../components/Product'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="font-[Tahoma]">
        <Header />
        <div className="z-10 sticky top-0"><Navbar />
        </div>
         <div className="z-0 relative"><Main/>
        </div>
        <Product />
        <About/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default Home