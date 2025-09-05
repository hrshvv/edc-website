import React from "react";

const TeamCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-64 h-64 relative group">
      <img
        src="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_1:1,c_fill,g_face/v1757094310/1000010180_ysmz1o.jpg"
        alt="Team member"
        className="w-64 h-64 object-cover object-top transition-all duration-300 ease-in-out hover:blur-xs hover:scale-105"
      />
      <div className="absolute z-10 bottom-0 w-full">
        <div className="bg-primary text-secondary py-2 px-4 m-2 rounded-3xl transition-all duration-500 ease-in-out">
          <p className="font-semibold">Harsh Verma</p>
          <p className="text-xs max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-500 ease-in-out">Technical Team Member</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
