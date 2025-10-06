import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Magnetic from "../magnetic";

export default function Header() {
  return (
    <div className={`p-8 flex items-center justify-between text-gray-300 text-sm mix-blend-difference `}>
      <Magnetic>
        <Link href={"/"} className={styles.headerLogo}>
          Shivam jha
        </Link>
      </Magnetic>
      <ul className="flex items-center justify-center gap-4 ">
        <Magnetic>
          <Link href="/work">work</Link>
        </Magnetic>
        <Magnetic>
          <Link href="/about">about</Link>
        </Magnetic>
        <Magnetic>
          <Link href="/contact">contact</Link>
        </Magnetic>
      </ul>
    </div>
  );
}
