"use client";
import React, { useState, useEffect } from "react";

interface DynamicBgImgProps {
  currentBg: string;
  otherBgImages: string[];
}

const DynamicBgImg: React.FC<DynamicBgImgProps> = ({
  currentBg,
  otherBgImages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % otherBgImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [otherBgImages]);

  return (
    <div className="h-full w-full relative">
      {otherBgImages.map((bgImage, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${String(otherBgImages[currentIndex])})`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DynamicBgImg;
