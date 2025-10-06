import Carousel from "@/Components/Carousel/Carousel";
import HorizontalText from "@/Components/HorizontalText/HorizontalText";
import Main from "@/Components/Main/Main";
import AnimatedText from "@/Components/Reveal/AnimatedText";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import { useCursorStore } from "@/StateManagment/zustandLib";
import React from "react";
import Link from "next/link";
import Reveal from "@/Components/Reveal/Reveal";
import ProjectsDesc from "@/Components/Projects/ProjectsDesc";
import Magnetic from "@/Components/magnetic";
import { motion } from "framer-motion";

export default function Work() {
  const { setIsVideoHovering, setIsButtonHovering } = useCursorStore();
  return (
    <Main>
      <ScrollToTop />
      <Carousel />
      <ProjectsDesc/>
      <div
        
      >
        <Reveal >
          <HorizontalText
            text={
              "Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa Whoa"
            }
            rotation={3}
            customFunc={setIsVideoHovering}
            className="border-2 bg-white text-black"
          />
        </Reveal>
      </div>
      <div className="w-full flex items-center justify-center text-[8vw] text-white">
        <div className="w-9/12 flex flex-col">
          <div className="flex items-center md:gap-16 gap-4">
            <AnimatedText text="LET'S" />
            <AnimatedText text="WORK" />
          </div>
          <div className="self-end">
            <AnimatedText text="TOGETHER" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <Magnetic>
          <motion.div whileTap={{
            scale: 0.9
          }}>
            <Link
              href={"/contact"}
              className="h-40 w-40 rounded-full bg-white text-black flex items-center justify-center font-semibold"
              onMouseEnter={() => setIsButtonHovering(true)}
              onMouseLeave={() => setIsButtonHovering(false)}
            >
              Start a project
            </Link>
          </motion.div>
        </Magnetic>
      </div>
    </Main>
  );
}
