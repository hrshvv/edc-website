import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TeamCard = ({ name, role , image}) => {
  return (
    <Popover>
      <PopoverTrigger className="text-left">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-64 h-64 relative group">
          <img
            src={image}
            alt="Team member"
            className="w-64 h-64 object-cover object-top transition-all duration-300 ease-in-out group-hover:blur-xs group-hover:scale-105"
          />
          <div className="absolute z-10 bottom-0 w-full">
            <div className="bg-white text-black py-4 px-4 m-2 rounded-3xl transition-all duration-400 ease-in-out">
              <p className="font-semibold">{name}</p>
              <p className="text-xs max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-400 ease-in-out">
                {role}
              </p>
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default TeamCard;
