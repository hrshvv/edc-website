import React from "react";
import AnimatedContent from "../../../../y/AnimatedContent/AnimatedContent";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DrawerTabs from "./DrawerTabs";

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
      <div className="flex justify-between items-center backdrop-blur-3xl p-4 px-6 bg-background/30">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex gap-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Team</Button>
          <Button variant="ghost">Events</Button>
          <Button variant="ghost">About</Button>
        </div>
        <div className="flex gap-2">
          <div className="md:hidden">
            <DrawerTabs />
          </div>
          <ThemeToggle />
          <Button>Connect</Button>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Navbar;
