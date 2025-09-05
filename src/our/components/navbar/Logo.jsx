import React from "react";
import { useTheme } from "../../../hooks/use-theme.jsx";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        // Light theme logo - you can replace this with your actual light logo
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/c_auto,f_auto,q_auto,g_center/v1756491588/EDC_New_Logo_light_qq2mqg.png"
          alt="Logo"
          width={100}
          height={50}
        />
      ) : (
        // Dark theme logo - you can replace this with your actual dark logo
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/c_auto,f_auto,q_auto,g_center/v1756491576/EDC_New_Logo_darkbg_so3njq.png"
          alt="Logo"
          width={100}
          height={50}
        />
      )}
    </>
  );
};

export default Logo;
