import React from "react";
import styles from "./description.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import Reveal from "../Reveal/Reveal";

export default function Description() {
  return (
    <div className={`flex flex-col xl:px-[10vw] md:px-[9vw] px-[4vw] sm:text-[1.5vw] text-[3vw] xl:py-32 md:py-28 sm:py-24 py-16 xl:gap-24 md:gap-20 sm:gap-16 gap-12 text-white`}>
      <div className={`${styles.descriptionone} md:w-[43%] w-[73%] `}>
        <Reveal>
          I&lsquo;M FREELANCE DEVELOPER AND STUDENT BASED IN 
          RAJASTHAN, INDIA. PRESENTLY STUDYING AT <a href="https://www.chitkara.edu.in/" target="_blank" className="text-blue-100 hover:text-blue-400">CHITKARA UNI.</a>
          <a href="/doc/Shivam _bishnoi_cv.pdf" download className={`${styles.downloadCv} sm:text-[1.8vw] text-[3vw] mt-6`}>
            DOWNLOAD CV{" "}
            <span>
              <FaArrowDownLong />
            </span>
          </a>
        </Reveal>
      </div>
      <div className={`${styles.descriptiontwo} md:w-[43%] w-[73%]`}>
        <Reveal>
          AND TRYING TO LEARN THESE FU*KING DATA STRUCTURE AND ALGORITHMS (THEY&lsquo;RE SO EASY).
        </Reveal>
      </div>
    </div>
  );
}
