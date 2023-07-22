import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img.freepik.com/free-photo/pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-22.jpg?w=740&t=st=1688819237~exp=1688819837~hmac=1c29089c1363897f3df0726dec4e0a36a4c9e6e0c0e48700667eeb1bbfda44e0",
    "https://img.freepik.com/free-photo/fashionable-mix-race-girl-trendy-blouse-straw-hat-standing-white-wall-perfect-white-smile-shopping-mood_273443-173.jpg?w=740&t=st=1688819310~exp=1688819910~hmac=cfa93540b5ab585cde8999daf4ac86a5a8636afbbe3660968902f2b4fc106f8c",
    "https://img.freepik.com/free-photo/afro-american-man_1303-4913.jpg?w=740&t=st=1688819404~exp=1688820004~hmac=f1ce207888f8e40d88d4cbe9f30c63fa745bd0e0834695905e6a59fd6bba34ab",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="data"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="data"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="data"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 flex mx-auto gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px]
           border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700
             hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px]
           border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700 hover:text-white
             active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
