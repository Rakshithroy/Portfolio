"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const travelImages = [
  "/travel/travel1.jpg",
  "/travel/travel2.jpg",
  "/travel/travel3.jpg",
  "/travel/travel4.jpg",
  "/travel/travel5.jpg",
  "/travel/travel6.jpg",
  "/travel/travel7.jpg",
  "/travel/travel8.jpg",
  "/travel/travel10.jpg",
  "/travel/travel12.jpg",
];

export default function BeyondWork() {
  return (
      <motion.section
        id="beyond-work"
        className="w-full py-16 text-center text-slate-900 dark:text-slate-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      {/* 🔹 Title */}
      <motion.h2
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Beyond Work
      </motion.h2>

      {/* 🔹 Scrolling Image Slideshow */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3} // Show 3 images at a time
          spaceBetween={20}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={5000} // Smooth right-to-left scrolling
          className="max-w-5xl mx-auto"
        >
          {travelImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={image || "/default-image.jpg"} 
                  alt={`Travel ${index + 1}`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔹 Text Content Below */}
        <motion.p
          className="mt-8 text-lg max-w-3xl mx-auto px-6 text-slate-700 dark:text-slate-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Exploring the world fuels my creativity.
        Traveling to different places, capturing breathtaking landscapes, and embracing new cultures  
        is what inspires me beyond writing code.  
        Every journey is a story, and every photo is a memory frozen in time.
      </motion.p>
    </motion.section>
  );
}
