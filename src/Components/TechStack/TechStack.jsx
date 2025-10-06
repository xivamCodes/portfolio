import React from "react";
import HorizontalText from "../HorizontalText/HorizontalText";
import Reveal from "../Reveal/Reveal";

export default function TechStack() {
  return (
    <div className="mt-24">
      <Reveal>
        <HorizontalText
          text="TECH STACK TECH STACK TECH STACK TECH STACK TECH STACK TECH STACK TECH STACK"
          rotation={4}
        />
      </Reveal>
      <div className="h-[60vh] flex items-center justify-center">
        3D TECH SPHERE
      </div>
    </div>
  );
}
