"use client";
import React from "react";
import styles from "./styles.module.css";
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  transform,
} from "framer-motion";
import { useCursorStore } from "@/StateManagment/zustandLib";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Cursor({ stickyElement }) {
  const { isHovering, isTextHovering, isEmoji, isVideoHovering, isButtonHovering } =
    useCursorStore();
  const cursorRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const emojiArray = ["💀", "😭", "😒"];
  let cursorSize = isHovered
    ? 45
    : isHovering
    ? 65
    : isTextHovering
    ? 120
    : isVideoHovering
    ? 200
    : isButtonHovering
    ? 0
    : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    const currentStickyElement = stickyElement.current;
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        currentStickyElement.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      if (isHovered) {
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.15);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.15);

        //rotation
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursorRef.current, { rotate: ` ${angle}rad` }, { duration: 0 });

        //stetching the circle
        const absDistance = Math.max(
          Math.abs(distance.x),
          Math.abs(distance.y)
        );
        const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
        scale.x.set(newScaleX);
        scale.y.set(newScaleY);
      } else {
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);

        scale.x.set(1);
        scale.y.set(1);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    currentStickyElement.addEventListener("mouseover", manageMouseOver);
    currentStickyElement.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      currentStickyElement.removeEventListener("mouseover", manageMouseOver);
      currentStickyElement.removeEventListener("mouseleave", manageMouseLeave);
    };
  });
  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  
  if (typeof window !== "undefined") {
    // Client-side-only code
    const isMouseDevice = window.matchMedia("(pointer: fine)").matches;
    if (!isMouseDevice) {
      return null; // Return null if the user is not using a mouse
    }
  }

  
  return (
    <motion.div
      transformTemplate={template}
      className={`${styles.cursor} ${
        !isHovering &&
        (isTextHovering
          ? "mix-blend-overlay"
          : isEmoji.hovering || isVideoHovering
          ? "mix-blend-ligthen"
          : "mix-blend-difference")
      }  relative`}
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    >
      {isHovering ? (
        <div className="rotate-[140deg] opacity-70">
          <FaArrowDownLong size={18} />
        </div>
      ) : isEmoji.hovering ? (
        <div className="text-[6vw]">{emojiArray[isEmoji.shape - 1]}</div>
      ) : (
        <></>
      )}
      {isVideoHovering && (
        <video
          width="400"
          height="400"
          className="rounded-full h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/images/mindblown.mp4" type="video/mp4" />
        </video>
      )}
    </motion.div>
  );
}
