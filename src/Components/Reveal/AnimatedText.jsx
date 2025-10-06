import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function AnimatedText({
  text,
  el: Wrapper = "div",
  TextClassName,
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
  childrenDelay = 0.05
}) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7, once: true });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: childrenDelay } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span
            className={`block ${TextClassName}`}
            key={`${line}-${lineIndex}`}
          >
            {line.split(" ").map((word, wordIndex, wordsArray) => {
              const charsArray = word.split(""); 
              return (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                  {charsArray.map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex !== wordsArray.length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </span>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
