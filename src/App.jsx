import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import BlurText from "../y/BlurText/BlurText";
import LightRays from "../y/LightRays/LightRays";
import Navbar from "./our/components/Navbar";
import RotatingText from "../y/RotatingText/RotatingText";
import Aurora from "../y/Aurora/Aurora";
import { FlipWords } from "@/components/ui/flip-words";

function App() {
  const [count, setCount] = useState(0);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          height: "100dvh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div> */}
      <div className="sticky top-0 z-50">
        <div>
          <Navbar />
        </div>
        <div className="">
          {/* <p className="text-5xl font-bold">dwbqjknld .mqwxiubkqj xliwqkhxsq</p> */}
          <div className="flex items-center gap-2 text-4xl font-bold justify-center">
            <p className="text-neutral-600 dark:text-neutral-400">Build</p>
            <FlipWords 
              words={["amazing", "beautiful", "modern", "stunning", "incredible"]} 
              duration={3000}
              className="text-blue-600 dark:text-blue-400"
            />
            <p className="text-neutral-600 dark:text-neutral-400">websites</p>
          </div>
          {/* <div className="flex items-center gap-2">
            <p className="font-dynalight text-xs">WE</p>
            <RotatingText
              texts={["React", "Bits", "Is", "Cool!"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
