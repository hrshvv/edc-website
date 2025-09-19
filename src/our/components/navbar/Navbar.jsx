import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DrawerTabs from "./DrawerTabs";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center bg-background/70 backdrop-blur-[4px] py-3 sm:py-4 px-8 border rounded-full">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 xl:gap-4">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-sm xl:text-base px-3 xl:px-4"
            >
              Home
            </Button>
          </Link>
          <Link to="/team">
            <Button
              variant="ghost"
              className="text-sm xl:text-base px-3 xl:px-4"
            >
              Team
            </Button>
          </Link>
          <Link to="/events">
            <Button
              variant="ghost"
              className="text-sm xl:text-base px-3 xl:px-4"
            >
              Events
            </Button>
          </Link>
          <Button variant="ghost" className="text-sm xl:text-base px-3 xl:px-4">
            About
          </Button>
        </div>

        {/* Right Section - Theme Toggle, Mobile Menu, Connect Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Drawer */}
          <div className="lg:hidden">
            <DrawerTabs />
          </div>

          {/* Connect Button - Desktop Only */}
          <Button size="sm" className="hidden lg:inline-flex">
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
