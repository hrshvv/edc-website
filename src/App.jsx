import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import BlurText from "../y/BlurText/BlurText";
import LightRays from "../y/LightRays/LightRays";
import Navbar from "./our/components/navbar/Navbar";
import RotatingText from "../y/RotatingText/RotatingText";
import Aurora from "../y/Aurora/Aurora";
import { FlipWords } from "@/components/ui/flip-words";
import TeamCard from "./our/components/TeamCard";
import Team from "./our/views/Team";
import Main from "./our/views/Main";

function App() {
  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 md:w-[90%] w-full p-4">
        <Navbar />
      </div>
      <div className="">
        <Main />
      </div>
    </>
  );
}

export default App;
