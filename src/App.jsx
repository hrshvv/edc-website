import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import BlurText from "../y/BlurText/BlurText";
import LightRays from "../y/LightRays/LightRays";

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
      <div className="mx-auto w-[70%] max-sm:w-full my-2 p-2">
        <div className="flex justify-between items-center backdrop-blur-3xl border-1 p-2 rounded-lg bg-background/30">
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
      </div>
    </>
  );
}

export default App;
