import React from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Reveal({ children, objectAmount = 0.3 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount:objectAmount, once: true });

  const mainControls = useAnimation();
  React.useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    // Your client-side code here
    if (isInView) {
      mainControls.start("visible");
    }
  }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20, },
          visible: { opacity: 1, y: 0, },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
      >
        {children}
      </motion.div>
    </div>
  );
}
