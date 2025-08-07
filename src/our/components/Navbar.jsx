import React from "react";
import AnimatedContent from "../../../y/AnimatedContent/AnimatedContent";
import { ThemeToggle } from "../../components/theme-toggle";

const Navbar = () => {
  return (
    <AnimatedContent
      distance={5}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <div className="flex justify-between items-center backdrop-blur-3xl border-1 p-4 rounded-lg bg-background/30">
        <div>Logo</div>
        <div className="flex gap-4">
          <p className="font-dynalight text-xs">HOME</p>
          <p className="font-dynalight text-xs">ABOUT</p>
          <p className="font-dynalight text-xs">CONTACT</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Navbar;
