import Link from "next/link";
import React from "react";

export default function Button({
  link = "/",
  content = "",
  styles,
  icon,
  className,
  target="_self"
}) {
  return (
    <Link
      href={link}
      target={target}
      className={`border-2 px-8 py-2 rounded-full overflow-hidden ${styles?.button} text-white ${className}`}
      data-content={content}
    >
      {content}
      {icon && icon}
    </Link>
  );
}
