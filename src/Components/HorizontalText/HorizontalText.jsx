"use client";
import { useScroll, motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export default function HorizontalText({text, rotation, className, customFunc=(val)=>{} }) {

  const slidingRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: slidingRef.current,
    offset: ["0 1", ["1 1"]],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  return (
    <div
      className={`xl:h-[50vh] md:h-[40vh] sm:h-[30vh] h-[20vh] flex items-center justify-center text-gray-200 whitespace-nowrap overflow-hidden hover:cursor-none`}
      
    >
      <motion.div
        className={`text-[8vw] ${className}`}
        ref={slidingRef}
        style={{
          x: x,
          rotate: rotation,
        }}
        onMouseEnter={() => customFunc(true)}
        onMouseLeave={() => customFunc(false)}
      >
        {text}
      </motion.div>
    </div>
  );
}
