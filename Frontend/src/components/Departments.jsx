import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pet Bording",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Pet Sitting",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Pet Grooming",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Dog Walking",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Pet Taxi",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Pet Training",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Pet Daycare",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Cat walking",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "Pet Diet",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>I'm Looking for</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;