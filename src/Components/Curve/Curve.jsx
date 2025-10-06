import React from "react";
import styles from "./styles.module.css";
import { svgAnimation } from "../Animations/animations";
import { motion } from "framer-motion";

export default function Curve() {
  const initialPath = `M0 0 L0 ${(typeof window !== "undefined") ? window.innerHeight : 0} Q200 ${
    (typeof window !== "undefined") ? window.innerHeight/2 : 0} 0 0`;
  const initialPathTwo = `M100 0 L100 ${(typeof window !== "undefined") ? window.innerHeight : 0} Q-100 ${
    (typeof window !== "undefined") ? window.innerHeight/2 : 0} 100 0`;

  return (
    <>
      <motion.svg
        className={styles.svgCurve}
        variants={svgAnimation}
        animate="enter"
        exit="exit"
        initial="initial"
      >
        <path d={initialPath}></path>
      </motion.svg>
      <motion.svg
        className={styles.svgCurvetwo}
        variants={svgAnimation}
        animate="enter"
        exit="exit"
        initial="initial"
      >
        <path d={initialPathTwo}></path>
      </motion.svg>
    </>
  );
}
