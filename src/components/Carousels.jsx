import React, { useState, useEffect } from "react";
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image paths
  const images = [
    "https://www.ourshopee.com/ourshopee-img/ourshopee_category_sliders/2_31012023010119_3_Gaming-Accessories_App.jpg", // Replace with actual image paths
    "https://ssjstoredz.com/cdn/shop/files/Logitech-G-Pro-X-Superlight-hero-2_1_1296x.png?v=1711465385",
    "https://dynacoretech.com//image/cache/catalog/slicing/slider/Web%20Banner%20Dynacore%20-%202024%20New%20Year%20Sales-1920x767.jpg",
  ];

  // Automatically switch to the next slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentSlide]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  return (
    <>
      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Carousel */}
        <div className="relative overflow-hidden  flex content-center items-center justify-center min-h-screen-80">
          {/* Wrapper for sliding animation */}
          <div
            className="flex transition-transform duration-1000 ease-in-out h-96" // Adjust the duration to 1000ms (1 second) for slower transitions
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {/* Carousel Images using img tag for better control */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className=" object-cover flex-shrink-0 w-full h-full bg-center bg-cover" // object-cover ensures the image fills the container while maintaining aspect ratio
              />
            ))}
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary font-bold py-2 px-4 opacity-50 hover:opacity-100"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary font-bold py-2 px-4 opacity-50 hover:opacity-100"
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
