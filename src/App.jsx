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
              words={[
                "amazing",
                "beautiful",
                "modern",
                "stunning",
                "incredible",
              ]}
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
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant="outline">Core Team</Button>
              <Button variant="outline">Technical Team</Button>
              <Button variant="outline">Outreach Team</Button>
              <Button variant="outline">Design Team</Button>
              <Button variant="outline">Content and Documentation Team</Button>
              <Button variant="outline">Liasioning Team</Button>
              <Button variant="outline">Events and Training Team</Button>
              <Button variant="outline">Marketing Team</Button>
              <Button variant="outline">Media and Networking Team</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <TeamCard
                name="Harsh Verma"
                role="Technical Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/1000010180_g496qx.jpg"
              />
              <TeamCard
                name="Utkarsh Srivastava"
                role="Technical Team Head"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Utkarsh_Srivastava_ahasfc.jpg"
              />
              <TeamCard
                name="Ujjwal Kaushik"
                role="Technical Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Ujjwal_Kaushik_qqlfwq.jpg"
              />
              <TeamCard
                name="Panna Tyagi"
                role="Liasioning Team Head"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/20250514_121810_wrahh6.jpg"
                />
              <TeamCard
                name="Aditya Agarwal"
                role="General Secretary"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Aditya_Agarwal_ezqijs.jpg"
              />
              <TeamCard
                name="Ananya Mishra"
                role="Media and Networking Team "
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757106502/Ananya_Mishra__ptthev.png"
              />
              <TeamCard
                name="Anushka Srivastava"
                role="Events and Training Team Head"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Anushka_Srivastava_pdyof8.jpg"
              />
              <TeamCard
                name="Daarim"
                role="Design Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105139/Daarim_wxbs4h.jpg"
              />
              <TeamCard
                name="Isha"
                role="Marketing Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_1323_gfjhut.jpg"
              />
              <TeamCard
                name="Shashank Sahu"
                role="Events and Training Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_20241215_200355_826_lqudce.webp"
              />
              <TeamCard
                name="Kalyani Chaunwal"
                role="Content and Documentation Team Head"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Kalyani_m8spfn.jpg"
              />
              <TeamCard
                name="Krish Bhardwaj"
                role="Events and Training Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Krish_Bhardwaj_jtkfsb.png"
              />
              <TeamCard
                name="Lavanya Singh"
                role="Media and Networking Team Member"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Lavanya_Singh_xv5dih.jpg"
              />
              <TeamCard
                name="Luv Mangla"
                role="Marketing Team Head"
                image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/LM_toe4zm.jpg"
              />
              

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
