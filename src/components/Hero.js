import React from "react";
import background from "../assets/background.jpeg"; // Replace with your image

function Hero() {
  return (
    <>
      <style>
        {`
          .hero {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70vh;
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 20px;
          }

          .hero-content {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px;
            border-radius: 10px;
          }

          .cta-button {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            background: #003366;
            color: white;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
          }
        `}
      </style>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-content">
          <h1>Welcome to Padel Website</h1>
          <p>Experience the best padel courts and training sessions!</p>
          <a href="#pricing" className="cta-button">Book Now</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
