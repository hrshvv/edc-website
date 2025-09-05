import React from "react";
import { useTheme } from "../../../hooks/use-theme.jsx";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        // Light theme logo - you can replace this with your actual light logo
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1757095434/EDC_New_Logo_light_h2jczl.png"
          alt="Logo"
          width={100}
          height={50}
        />
      ) : (
        // Dark theme logo - you can replace this with your actual dark logo
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1757095428/EDC_New_Logo_darkbg_b8ptlv.png"
          alt="Logo"
          width={100}
          height={50}
        />
      )}
    </>
  );
};

export default Logo;
