import { useState, useEffect } from "react";

const Carousel = ({ children, data = [...new Array(20)] }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [leftSliderSHow, setLefSliderShow] = useState(false);
  // The slider images data
  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? data.length - 2 : currentSlider - 1
    );
    setLefSliderShow(currentSlider > 1 ? true : false);
  };

  const nextSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === data.length - 2 ? 0 : currentSlider + 1
    );
    setLefSliderShow(true);
  };
  // if you don't want to change the slider automatically then you can just remove the useEffect

  const isSmallScreen = window.innerWidth <= 768;
  return (
    // ...

    <div className="relative overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-between z-50 ">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className={`flex justify-center items-center mr-auto ${
            !leftSliderSHow && "hidden"
          }  bg-secondary rounded-full m h-6 md:w-8 md:h-8`}
          style={{ zIndex: 2, cursor: "pointer" }}
        >
          {/* ... */}
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex ml-auto justify-center items-center bg-secondary rounded-full w-6 h-6 md:w-8 md:h-8"
          style={{ zIndex: 2, cursor: "pointer" }}
        >
          {/* ... */}
        </button>
      </div>
      {/* slider container */}
      <div
        className="ease-linear duration-300 flex"
        style={{
          transform: `translateX(-${
            currentSlider * (isSmallScreen ? 100 : 50)
          }%)`,
        }}
      >
        {/* sliders */}
        {children}
      </div>
    </div>

    // ...
  );
};
export default Carousel;
