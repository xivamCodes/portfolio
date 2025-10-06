import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Mali } from "next/font/google";
import { useAppStore } from "@/StateManagment/zustandLib";
import React from "react";
import Head from "next/head";


const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  const { setIsLoading } = useAppStore();
  React.useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[setIsLoading])
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className={mali.className}>
      <Head>
          <title>Shivam jha</title>
          <meta
            name="description"
            content="Creative developer based in india, freelancer, currently persuing cse at Chitkara University, Patiala"
          />
        </Head>
        <Component {...pageProps} />
        <motion.div
          className="absolute top-0 left-0 w-full h-[100vh] bg-white origin-bottom z-50"
          initial={{ scaleY: 0}}
          animate={{ scaleY: 0}}
          exit={{ scaleY: 1}}
          transition={{duration: .7, ease:[0.22, 1, 0.36, 1]}}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-[100vh] bg-white origin-top z-50"
          initial={{ scaleY: 1}}
          animate={{ scaleY: 0}}
          exit={{ scaleY: 0}}
          transition={{duration: .7, ease:[0.22, 1, 0.36, 1]}}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
