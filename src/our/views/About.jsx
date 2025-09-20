import React from "react";
import PixelBlast from "../../components/PixelBlast";
import { FlipWords } from "../../components/ui/flip-words";

const About = () => {
  const words = ["Innovation", "Creativity", "Entrepreneurship", "Growth", "Success", "Future"];

  return (
    <div className="min-h-screen pt-24 px-4 relative">
      {/* PixelBlast Background */}
      {/* <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#05B1DE"
          patternScale={1.5}
          patternDensity={0.8}
          enableRipples={true}
          rippleIntensityScale={0.5}
          rippleSpeed={0.2}
          speed={0.3}
          edgeFade={0.3}
          className="w-full h-full"
        />
      </div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
            About EDC
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              The Entrepreneurship Development Cell at JSS University is dedicated to fostering
            </p>
            <div className="text-2xl md:text-3xl font-bold text-[#05B1DE]">
              <FlipWords words={words} duration={2000} />
            </div>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              among students and building the next generation of innovators.
            </p>
          </div>
        </div>
        
        <div className="mt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Our Mission
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                To create a thriving ecosystem that nurtures entrepreneurial thinking, 
                provides mentorship, and connects students with industry leaders. 
                We believe in empowering the next generation of innovators and change-makers.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#05B1DE]/10 to-purple-500/10 backdrop-blur-md border border-[#05B1DE]/20">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">What We Do</h3>
              <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05B1DE] rounded-full"></div>
                  <span>Organize startup competitions and pitch events</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05B1DE] rounded-full"></div>
                  <span>Conduct workshops on entrepreneurship and innovation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05B1DE] rounded-full"></div>
                  <span>Provide mentorship and guidance to budding entrepreneurs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05B1DE] rounded-full"></div>
                  <span>Build networks between students and industry professionals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05B1DE] rounded-full"></div>
                  <span>Support student-led startup initiatives</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-[#05B1DE]/20 to-cyan-500/20 backdrop-blur-md border border-[#05B1DE]/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-[#05B1DE] mb-3 group-hover:text-cyan-600 transition-colors">500+</div>
              <div className="text-neutral-600 dark:text-neutral-400 font-medium">Students Reached</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:text-pink-600 transition-colors">50+</div>
              <div className="text-neutral-600 dark:text-neutral-400 font-medium">Events Organized</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-3 group-hover:text-emerald-600 transition-colors">20+</div>
              <div className="text-neutral-600 dark:text-neutral-400 font-medium">Startups Supported</div>
            </div>
          </div> */}
          
          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-r from-[#05B1DE]/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join our community of innovators and entrepreneurs. Let's build the future together, 
                one idea at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-[#05B1DE] text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Join EDC
                </button>
                <button className="px-8 py-3 border-2 border-[#05B1DE] text-[#05B1DE] rounded-full font-semibold hover:bg-[#05B1DE] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
