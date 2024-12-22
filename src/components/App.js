import React from "react";
import Navbar from "./Navbar"; // Relative path
import Hero from "./Hero"; // Relative path
import Section from "./Section"; // Relative path
import Footer from "./Footer"; // Relative path
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        id="about"
        title="About Us"
        content="Discover premium padel courts, tournaments, and training sessions designed to elevate your game."
      />
      <Section
        id="our-courts"
        title="Our Courts"
        content="State-of-the-art courts designed for players of all levels. Book your game and enjoy a world-class padel experience."
      />
      <Section
        id="pricing"
        title="Pricing"
        content="Affordable rates for everyone. Choose the plan that suits your needs!"
      />
      <Footer />
    </div>
  );
}

export default App;
