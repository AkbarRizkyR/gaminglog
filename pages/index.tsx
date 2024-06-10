import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Products from '@/Components/Products'
import TopProduct from '@/Components/TopProduct'
import BestSeller from '@/Components/BestSeller'
import News from '@/Components/News'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {
  useEffect (() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"
    })
  })

  return (
    <div className='overflow-x-hidden '>
      <Navbar />
      <Hero />
      <Products />
      <TopProduct />
      <BestSeller />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage