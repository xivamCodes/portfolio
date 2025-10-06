"use client";
import React from "react";
import Magnetic from "../magnetic";
import { HiMenuAlt1 } from "react-icons/hi";
import styles from "./hamburger.module.css";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SideMenu from "../SideMenu/SideMenu";
import { AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Hamburger = React.forwardRef(function Index(props, ref) {
  const hamburgerRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!isActive) {
      gsap.to(hamburgerRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: "+=100px",
          onLeave: () => {
            gsap.to(hamburgerRef.current, { scale: 1 });
          },
          onEnterBack: () => {
            gsap.to(hamburgerRef.current, { scale: 0 });
          },
        },
      });
    }
  });
  return (
    <div className="relative">
      <div
        ref={isActive ? null : hamburgerRef}
        className="scale-0 fixed top-1/2 -translate-y-1/2 left-[20px] z-[1000] mix-blend-difference"
        onClick={() => setIsActive(!isActive)}
      >
        <Magnetic>
          <div className={styles.burger}>
            <div className={styles.box}>
              <div
                className={`${isActive? styles.active : styles.notActive } ${styles.btn}`}
              >
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
              </div>
            </div>
            <div className={styles.bounds} ref={ref}></div>
          </div>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">{isActive && <SideMenu />}</AnimatePresence>
    </div>
  );
});

export default Hamburger;
