/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import heroImg from "@/Assets/hero_img.jpg";
import styles from "./Hero.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import Reveal from "../Reveal/Reveal";
import AnimatedText from "../Reveal/AnimatedText";
import { useCursorStore } from "@/StateManagment/zustandLib";

const ScrollDown = () => {
  const text = React.useRef(null);
  React.useEffect(() => {
    if (text.current) {
      const originalText = text.current.innerText;
      const transformedText = originalText
        .split("")
        .map(
          (char, index) =>
            `<span style="transform:rotate(${index * 11.51}deg)">${char}</span>`
        )
        .join("");

      text.current.innerHTML = transformedText;
    }
  });
  return (
    <div className="sm:h-48 sm:w-48 h-8 w-8 rounded-full relative flex items-center justify-center text-gray-400">
      <motion.span
        className="text-xl"
        initial={{ y: -5 }}
        animate={{
          y: [-5, 5, -5],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
        <FaArrowDownLong />
      </motion.span>
      <div
        className={`h-full w-full absolute text-xl sm:block hidden ${styles.circle}`}
      >
        <p ref={text} className={styles.text}>
          SCROLL DOWN&nbsp; ⥈ &nbsp;SCROLL DOWN &nbsp;⥈
        </p>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="flex flex-col xl:px-[10vw] md:px-[9vw] px-[4vw] xl:leading-[7vw] leading-[10vw] gap-4 mt-6 text-gray-100 mix-blend-difference">
      <div
        className="w-full md:text-[6vw] text-[7vw] font-bold tracking-wide"
      >
        <div className="flex overflow-hidden md:text-[6vw] text-[9vw]">
          <AnimatedText text="HEY!" />
          <span>👋</span>
        </div>
        <div className="flex items-center overflow-hidden md:text-[6vw] text-[9vw]">
          <AnimatedText text="I&rsquo;M" />
          <div data-scroll data-scroll-speed="-0.09">
            <Reveal>
              <Image
                src={heroImg}
                height={60}
                width={280}
                alt="notfound"
                className="rounded-[8rem] h-[6vw] brightness-105 w-[6vw] xl:mx-6 md:mx-4 mx-2"
              ></Image>
            </Reveal>
          </div>
          <AnimatedText text="Shivam " />
        </div>
        <div className="flex">
          <AnimatedText text="A &ldquo;C" />
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ once: true, y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            🥶
          </motion.span>
          <AnimatedText text="Ol&rdquo; DEVELOPER"></AnimatedText>
        </div>
      </div>
      <div className="w-full text-[6vw] font-bold flex">
        <div className="w-[40%] flex items-center justify-center">
          <ScrollDown />
        </div>
        <div
          className="flex flex-col items-end tracking-wide sm:w-[60%] w-[90%] sm:text-[6vw] text-[9vw]"
          data-scroll
          data-scroll-speed=".06"
        >
          <div className="flex">
            <AnimatedText text="DEVEL"></AnimatedText>
            <Reveal>
              <span className={styles.develop}>O</span>
            </Reveal>
            <AnimatedText text="PING"></AnimatedText>
          </div>
          <div className="flex">
            <AnimatedText text="NE"></AnimatedText>
            <span className="text-[5vw]" data-scroll data-scroll-speed=".06">
              ⚒️
            </span>
            <AnimatedText text="TGEN"></AnimatedText>
          </div>
          <div >
            <AnimatedText text="SH*TS" />
          </div>
        </div>
      </div>
    </div>
  );
}
