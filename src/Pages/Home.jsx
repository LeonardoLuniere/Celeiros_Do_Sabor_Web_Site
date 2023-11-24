import React from 'react';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import LeafletMap from '../Components/Maps/LeafletMap';

export default function Home(products) {
  return (
    <div>
      <br/>
      <About />
      <br/>
      <br/>
      <br/>
      <div className="home-container">
        <div className="home-map">
          <Contact />
        </div>
        <div className="home-map">
          <LeafletMap />
        </div>
      </div>
    </div>
  );
}
