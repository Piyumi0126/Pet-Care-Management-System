import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          We are passionate about providing the highest standard of care for 
          your beloved pets. With a dedicated team of experienced veterinarians, 
          groomers, and pet specialists, we offer comprehensive services tailored
           to meet the unique needs of each animal. From routine health checkups
            and medical treatments to grooming and boarding, we are committed to 
            ensuring your pets are happy, healthy, and well-cared for. At Looie Pet 
            Care, we treat every pet like family because we know they are an important 
            part of yours. Our mission is to create a safe and loving environment where
             your pets receive the attention and care they deserve.
          </p>
          <p>We are all in 2024!</p>
          <p>
          We are working on a new, modern facility to provide even better care for your pets.</p>
          <p>
          your pet's well-being is our top priority. We believe in offering personalized,
           compassionate care that reflects the love and attention every pet deserves. 
           Our team of skilled professionals is equipped to provide a full range of services, 
           from veterinary care and grooming to training and boarding. Whether it's a routine
            checkup or specialized care, we take the time to understand your pet's individual
             needs. With a focus on building long-lasting relationships with pet owners, we aim
              to make every visit a positive and stress-free experience for both you and your
               furry companions.
          </p>
          <p>At Paws Pet Care, we’re more than just caretakers;</p>
          <p>We’re your pet's second family!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;