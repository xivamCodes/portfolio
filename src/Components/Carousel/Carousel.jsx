/* eslint-disable @next/next/no-img-element */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import styles from "./carousel.module.css";
import { useCursorStore } from "@/StateManagment/zustandLib";
import Reveal from "../Reveal/Reveal";
import { data } from "../Projects/projectData";
import Button from "../Button/Button";
import Image from "next/image";

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-84%"]);

  return (
    <div>
      <div
        ref={targetRef}
        className="relative h-[500vh] md:block hidden text-white"
      >
        <div className="sticky top-0 flex items-center h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8">
            {data.map((card, index) => {
              return <Card card={card} key={card.id} />;
            })}
            <ThisPageButton content="More?" shape={1}/>
            <ThisPageButton content="Seriously?" shape={2}/>
            <ThisPageButton content="Fine" shape={3}/>
            <div className="h-[70vh] w-[20vw] flex items-center justify-center text-2xl flex-col">
              <a href="https://github.com/Shivam bishnoi156/" target="_blank" className={`${styles.toGithub}`}>
                Github
                <span>
                  <FaArrowDownLong />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-4 md:hidden flex-col w-screen overflow-scroll px-4">
        {data.map((card, index) => {
          return <Card card={card} key={`${card.id}`} />;
        })}
      </div>
    </div>
  );
};

const ThisPageButton = ({className="", content, shape = 1}) => {
  const { setIsEmoji } = useCursorStore();
  return (
    <div
      className={`h-[70vh] w-[20vw] flex items-center justify-center text-2xl flex-col ${className}`}
      onMouseEnter={() => setIsEmoji({ shape: shape, hovering: true })}
      onMouseLeave={() => setIsEmoji({ shape: shape, hovering: false })}
    >
      {content}
    </div>
  );
};
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="md:h-[80vh] sm:h-[70vh] h-[40vh] md:w-[70vw] w-full"
    >
      <Reveal>
        <div className="md:h-[70vh] sm:h-[60vh] h-[30vh] w-full rounded-2xl relative">
          <Image
            src={card.link}
            alt="not found"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 63vw"
            className="h-full w-full rounded-2xl object-cover shadow-sm shadow-white"
          />
        </div>
        <div className="flex items-center justify-start gap-4 mt-6 pl-5">
          <Button
            link={card.visitLink}
            content="Open"
            target="_blank"
            className={"flex items-center justify-center gap-2"}
            styles={styles}
            icon={<FaArrowDownLong className="-rotate-[135deg]" />}
          />
          <Button link={`/work/${card.id}`} content="More" styles={styles} />
        </div>
      </Reveal>
    </div>
  );
};

export default Carousel;
