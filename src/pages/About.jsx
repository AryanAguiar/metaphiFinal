import React, { useRef } from "react";
import { Box } from "@mui/material";
import "./About.css"; // Import CSS for smooth marquee

const logos = [
  "/path-to-logo1.png",
  "/path-to-logo2.png",
  "/path-to-logo3.png",
  "/path-to-logo4.png",
  "/path-to-logo5.png",
  "/path-to-logo6.png",
  "/path-to-logo7.png",
];

const LogoMarquee = () => {
  const logoRefs = useRef([]);

  // Duplicate logos to prevent gaps and ensure smooth looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Box className="marquee">
      <Box className="marquee-inner">
        {duplicatedLogos.map((logo, index) => (
          <a href="#" key={index}>
            <Box
              ref={(el) => (logoRefs.current[index] = el)}
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              className="marquee-logo"
            />
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default LogoMarquee;
