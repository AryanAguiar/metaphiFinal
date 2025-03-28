import React, { useEffect, useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const TitleDescriptionSection = () => {
  const sectionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 10, position: "relative" }}>
      {/* Background gradient effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(144, 19, 254, 0.1))",
          zIndex: -1,
          filter: "blur(60px)",
        }}
      />

      {/* Section 1 */}
      <Box
        ref={addToRefs}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          py: 6,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            flex: 1,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #4A90E2, #9013FE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Leading Mobile App Development, Software Development & IT Consulting Company
        </Typography>

        <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8 }}>
          Founded in 2025, Metaphi Innovations is a leading Mobile App, Software Development, 
          and Web Development company, driving digital transformation for businesses worldwide.
        </Typography>
      </Box>

      <Box ref={addToRefs} sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            color: "#fff",
            borderColor: "#9013FE",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "#9013FE",
              color: "#fff",
            },
          }}
        >
          About Us <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Box>

      {/* Section 2 */}
      <Box
        ref={addToRefs}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: 6,
          py: 6,
        }}
      >
        <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8 }}>
          Unlock growth opportunities with robust software solutions, system modernization, 
          and next-gen technologies—powered by a leading development company.
        </Typography>

        <Typography
          variant="h3"
          sx={{
            flex: 1,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #FF6F61, #D7263D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Accelerating Business Growth with Intelligent Solutions
        </Typography>
      </Box>

      <Box ref={addToRefs} sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            color: "#fff",
            borderColor: "#D7263D",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "#D7263D",
              color: "#fff",
            },
          }}
        >
          Services <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Box>
    </Container>
  );
};

export default TitleDescriptionSection;
