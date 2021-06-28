import React, { useEffect } from 'react';
import { animateScroll as scroll, scrollSpy } from 'react-scroll'
import { Top } from './icons'
import './App.css'
import logo from './img/logo.png'
import InnerContext from "./Contaxt";

import { Main, Services, Skils, About, Portfolio, Testimonial, Contact, Footer, Map } from './Components'
import { main, services, skils, about, portfolio, testimonial, contact, footer } from './data/en';
function App() {
  const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102564.42831147094!2d2.842755647707574!3d36.5507761186765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0ac7bf5ccf6d%3A0x1be33bac7d1c266c!2z2YjYp9ivINin2YTYudmE2KfZitqo!5e0!3m2!1sar!2sdz!4v1624828826051!5m2!1sar!2sdz'

  useEffect(() => {
  

    scrollSpy.update();


  }, [])


  const scrollTop = () => {
    scroll.scrollToTop(100)
  }

  return (
    <InnerContext
      value={{
        logo,
        main,
        services,
        skils,
        about,
        portfolio,
        testimonial,
        contact,
        footer,


      }}>
      <div className='bg-blue-950 font-RobotoM'>
        <Main />
        <Services />
        <Skils />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Map
          src={src}
          title="blida"
          className='w-full h-64'
        />
        <Footer />
        <button
          className='w-12 h-12 flex items-start 
                     justify-start rounded-full 
                     hover:animate-ping
                     text-blue-450
                     hover:text-blue-400
                     fixed z-999 bottom-28 right-10 border 
                     border-blue-500
                     hover:border-blue-600 p-3'
          onClick={scrollTop}>
          <Top className='fill-current  w-6 h-6' />
        </button>
      </div>
    </InnerContext>
  );
}

export default App;
