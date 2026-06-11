import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useTransform, useScroll, animate } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import heroImg from '@/Assets/hero_img.jpg';
import styles from './Hero.module.css';
import AnimatedText from '../Reveal/AnimatedText';
import Reveal from '../Reveal/Reveal';

const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const SocialIcons = () => {
  const [hovered, setHovered] = useState(null);
  const icons = [
    { icon: <FaGithub />, href: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/yourusername' },
    { icon: <SiCodechef />, href: 'https://codechef.com/users/yourusername' },
  ];

  return (
    <div className="hidden md:flex flex-col gap-6 fixed left-8 bottom-0 z-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md -z-10 rounded-full"></div>
      {icons.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ y: -5 }}
        >
          {item.icon}
          <motion.span 
            className="absolute left-10 text-sm bg-gray-900 px-2 py-1 rounded-md whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: hovered === i ? 1 : 0,
              x: hovered === i ? 0 : 10
            }}
          >
            {item.href.split('/').pop()}
          </motion.span>
        </motion.a>
      ))}
      <div className="h-24 w-px bg-gray-600 mx-auto mt-4"></div>
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-12 md:mt-24">
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-gray-400"
      >
        <FaArrowDown size={20} />
      </motion.div>
      <span className="text-sm text-gray-400 font-mono">Scroll down</span>
    </div>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <SocialIcons />

      <motion.div 
        className="w-full max-w-6xl mx-auto"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-900/30 backdrop-blur-3xl -z-10 rounded-3xl"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* LEFT COLUMN */}
          <GlassCard className="md:w-2/3 p-8 md:p-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Hi, I'm Shivam
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-6">
                I build <span className="text-white font-bold">digital experiences</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                A passionate developer crafting beautiful, responsive, and user-friendly 
                applications with modern web technologies.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* <motion.a
                  href="#work"
                  className="px-8 py-3 bg-gradient-to-r from-white to-gray-200 text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View My Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a> */}

                {/* <motion.a
                  href="#contact"
                  className="px-8 py-3 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a> */}
              </div>
            </motion.div>
          </GlassCard>

          {/* RIGHT COLUMN */}
          <GlassCard className="p-1">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-gray-400/20 rounded-full blur-3xl opacity-30"></div>

              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20"
                animate={{
                  y: isHovered ? [-10, 10, -10] : 0,
                  transition: { duration: isHovered ? 3 : 1.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
                }}
              >
                <Image
                  src={heroImg}
                  alt="Shivam's Profile"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                  <div>
                    <h3 className="text-white text-xl font-bold">Shivam</h3>
                    <p className="text-gray-300">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaCode />
              </motion.div>
            </motion.div>
          </GlassCard>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24">
          <ScrollIndicator />
        </div>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-white/5 backdrop-blur-sm rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-gray-300/10 backdrop-blur-sm rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-white/5 backdrop-blur-sm rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black_70%)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
