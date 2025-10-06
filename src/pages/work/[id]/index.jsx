/* eslint-disable @next/next/no-img-element */
import Main from "@/Components/Main/Main";
import { data } from "@/Components/Projects/projectData";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import styles from "@/Components/Carousel/carousel.module.css";

export default function Index() {
  const router = useRouter();
  const id = router.query.id;
  const details = data.find((project) => project.id === id);
  if (!details) {
    return (
      <Main>
        <div className="h-[60vh] flex items-center justify-center flex-col gap-8">
          <h1 className="text-[4vw] text-red-500">Project Unavailable</h1>
          <Link href="/work" className="border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black duration-200">Check other Projects</Link>
        </div>
      </Main>
    )
  }
  return (
    <Main>
        <ScrollToTop/>
      <div className="mb-16">
        <div className="md:h-screen h-[40vh] w-screen md:px-16 px-4 md:pb-16 pb-4">
          <img
            src={details?.link}
            alt="notFound"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="md:px-16 px-4">
          <h1 className="md:text-[4vw] text-[9vw]">{details?.title} :</h1>
          <p className="md:ml-16 ml-4 md:text-[1.8vw] text-[6vw] text-gray-300">
            {details?.description}
          </p>
          <ul className="mt-6 md:ml-16 ml-4 flex flex-col gap-2">
            {details?.points.map((point, index) => {
              return <li key={point}>{index+1}) {point}</li>;
            })}
          </ul>
        </div>
        <div className="md:px-16 px-4 mt-8">
          <a href={details.visitLink} target="_blank">
          <motion.button
            className={`rounded-2xl border-2 px-4 py-1 flex items-center justify-center gap-2 ${styles.button}`}
            data-content="Visit"
            whileTap={{
              scale: 0.9,
            }}
          >
            Visit
            <span className="-rotate-[135deg]">
              <FaArrowDownLong />
            </span>
          </motion.button>
          </a>
        </div>
      </div>
    </Main>
  );
}
