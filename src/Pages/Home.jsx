import React from 'react'
import Header from '../Components/Header';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

export default function Home(products) {
  return (
    <div>
        <Header />
        <About />
        <Contact />
      </div>
  )
}

