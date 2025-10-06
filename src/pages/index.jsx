import React from "react";
import PreLoader from "@/Components/Loadings/PreLoader";
import Hero from "@/Components/Hero/Hero";
import Main from "@/Components/Main/Main";
import Description from "@/Components/Description/Description";
import Projects from "@/Components/Projects/Projects";
import HorizontalText from "@/Components/HorizontalText/HorizontalText";
import Footer from "@/Components/Footer/Footer";
import { useAppStore } from "@/StateManagment/zustandLib";
import TechStack from "@/Components/TechStack/TechStack";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import Head from "next/head";

export default function Home() {
  const { isLoading } = useAppStore();
  React.useEffect(() => {
    (async () => {
      const Locomotive = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new Locomotive({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,
        smoothMobile: true,
        mobile: {
          smooth: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
        },
        smartphone: {
          smooth: true,
        },
      });
    })();
  });
  if (isLoading) {
    return <PreLoader />;
  } else {
    return (
      <Main>  
        <ScrollToTop />
        <Hero />
        <Description />
        <Projects />
        <TechStack />
      </Main>
    );
  }
}
