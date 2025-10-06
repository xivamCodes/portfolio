import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCursorStore } from "@/StateManagment/zustandLib";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data, indNum }) {
  const { setIsHovering } = useCursorStore();
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const mouseXSpring = useSpring(cardX);
  const mouseYSpring = useSpring(cardY);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"]
  );

  const handleMouseMove = (e) => {
    const { width, height, top, left } = e.target.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    cardX.set(xPct);
    cardY.set(yPct);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      key={indNum}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovering(true)}
      className="relative xl:h-[80vh] md:h-[60vh] sm:h-[50vh] h-[30vh] w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 shrink-0 cursor-pointer flex items-end justify-center"
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        whileTap={{
          scale: 1.02,
        }}
        className="relative h-[90%] w-[90%] hover:h-[98%] hover:w-[98%] duration-150"
      >
        <Link href={`/work/${data.id}`}>
          <Image
            fill
            sizes="(max-width: 900px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            quality={100}
            alt="not found"
            src={data.link}
            className="absolute top-0 left-0 rounded-xl h-full w-full brightness-75 object-cover"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
