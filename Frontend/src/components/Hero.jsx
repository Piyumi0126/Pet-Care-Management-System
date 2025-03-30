import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Paws Pet Care is a premier facility dedicated to offering comprehensive pet
           care services with compassion and expertise. Our team of skilled veterinarians
            and pet care professionals is committed to providing personalized care tailored 
            to the unique needs of each pet. At Paws Pet Care, we prioritize the health and 
            happiness of your furry companions, ensuring a seamless experience towards their
             well-being and comfort.







          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;