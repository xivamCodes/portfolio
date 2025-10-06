import { useRef, useState, useEffect } from "react";
import { FiLock } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="h-screen w-screen bg-[#131212] flex items-center justify-center">
      <EncryptButton />
    </div>
  );
};

const TARGET_TEXT = "user found";
const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 80;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState("SEARCHING...");

  useEffect(() => {
    const scramble = () => {
      let pos = 0;
      intervalRef.current = setInterval(() => {
        const scrambled = TARGET_TEXT.split("")
          .map((char, index) => {
            if (pos / CYCLES_PER_LETTER > index) {
              return char;
            }

            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];

            return randomChar;
          })
          .join("");

        setText(scrambled);
        pos++;

        if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
          stopScramble();
        }
      }, SHUFFLE_TIME);
    };
    scramble();

    return () => stopScramble();
  }, []);

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.button
        whileHover={{
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.975,
        }}
        className="relative overflow-hidden uppercase text-slate-300 transition-colors hover:text-indigo-300 text-[5vw]"
      >
        <div className="relative z-10 flex items-center gap-2">
          <span>{text}</span>
        </div>
      </motion.button>
    </AnimatePresence>
  );
};

export default PreLoader;
