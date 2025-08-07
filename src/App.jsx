import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import BlurText from "../y/BlurText/BlurText";
import LightRays from "../y/LightRays/LightRays";
import Navbar from "./our/components/Navbar";
import RotatingText from "../y/RotatingText/RotatingText";

function App() {
  const [count, setCount] = useState(0);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100dvh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#03dffc"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="mx-auto w-[70%] max-sm:w-full my-2 px-2">
        <div>
          <Navbar />
        </div>
        <div className="">
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
