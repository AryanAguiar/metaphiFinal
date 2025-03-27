import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { gsap } from "gsap";
import heroImg1 from "../images/webdev.png";
import partner1 from "../images/partner-2.png";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import svg1 from "../images/folder.png";
import svg2 from "../images/handshake.svg";
import svg3 from "../images/award.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "App Development Company",
    subtitle: " Rated # 1  Mobile App Development Company in India.",
    image: heroImg1,
  },
  {
    title: "Web Development Company",
    subtitle: " Rated #1 Web Development Company in India.",
    image: heroImg1,
  },
  {
    title: "Blockchain Development Company",
    subtitle: " Rated #1 Blockchain Development Company in India.",
    image: heroImg1,
  },
];

const counters = [
  { value: 50, label: "Projects Completed", icon: svg1 },
  { value: 40, label: "Trusted Partners", icon: svg2 },
  { value: 10, label: "Innovation Awards Won", icon: svg3 },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrame = useRef(null);
  const lastTimestamp = useRef(performance.now());
  const headerRef = useRef(null);
  const sectionRef = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  };

  useEffect(() => {

    sectionRef.current.forEach((el, index) => {
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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    const animateElements = () => {
      gsap.fromTo(
        [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      );
    };

    animateElements();

    const headingAnimation = () => {
      gsap.fromTo(
        [headerRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 2.2, ease: "power3.out", stagger: 0.2 }
      )
    }

    headingAnimation();

    const updateSlide = (timestamp) => {
      const elapsed = timestamp - lastTimestamp.current;

      if (elapsed >= 5000) {
        gsap.to([textRef.current, subTextRef.current, buttonRef.current, imageRef.current], {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            animateElements();
          },
        });
        lastTimestamp.current = timestamp;
      }

      animationFrame.current = requestAnimationFrame(updateSlide);
    };

    animationFrame.current = requestAnimationFrame(updateSlide);

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);


  //our partner slider

  const logos = [
    partner1,
    partner1,
    partner1,
    partner1,
    partner1,
    partner1,
  ];

  return (
    <>
      {/* Hero section */}
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.9) 100%),
          linear-gradient(90deg, rgba(8,10,19,1) 5%, rgba(0,51,102,0.9) 50%, rgba(0,102,51,0.7) 90%, rgba(0,0,0,0) 100%)
        `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          minHeight: "100%",
          padding: "20px",
          color: "white",
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "1485px",
          paddingTop: 7,
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, padding: "20px", maxWidth: "900px" }}>
            <Typography
              ref={textRef}
              variant="h3"
              className="heading"
              sx={{
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "40px" },
              }}
            >
              {slides[currentIndex].title}
            </Typography>

            <Typography
              ref={subTextRef}
              variant="h6"
              className="desc"
              sx={{
                mb: 4,
                background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "20px", sm: "24px", md: "19px", lg: "24px", xl: "28px" },
              }}
            >
              {slides[currentIndex].subtitle}
            </Typography>

            <Button
              ref={buttonRef}
              variant="contained"
              sx={{
                fontSize: "1rem",
                borderRadius: "30px",
                padding: "10px 20px",
                background: "linear-gradient(145deg, #b8b8b8, #ffffff, #7e7e7e)",
                border: "1px solid #999",
                boxShadow: "inset 2px 2px 3px rgba(255,255,255,0.5), inset -2px -2px 3px rgba(0,0,0,0.3), 3px 3px 5px rgba(0,0,0,0.3)",
                color: "#000",
                textTransform: "uppercase",
                "&:hover": {
                  background: "linear-gradient(145deg, #ffffff, #d1d1d1, #a3a3a3)",
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Right Side - Changing Image */}
          <Box ref={imageRef} sx={{ flex: 1, display: "flex", justifyContent: "right", padding: "20px" }}>
            <img
              src={slides[currentIndex].image}
              alt="Slide Image"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* stats section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            textAlign: "center",
            py: 7,
            flexWrap: "wrap",
          }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "rgba(37, 4, 255, 0.29)",
                  padding: "15px 25px",
                  borderRadius: "50px",
                  width: "250px"
                }}
              >

                <Typography variant="h4" sx={{ fontSize: 40 }}>
                  <img style={{ width: "40px" }} src={counter.icon} alt="" />
                </Typography>

                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", }}>
                    <CountUp start={0} end={counter.value} duration={4} />+
                  </Typography>
                  <Typography variant="body1">{counter.label}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

      </Container>

      {/* Partners section */}
      <Container maxWidth={"xl"} disableGutters sx={{ px: 6, py: 9 }}>
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "46px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Official Partners Of
        </Typography>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000}
          allowTouchMove={false}
          breakpoints={{
            200: { slidesPerView: 2, spaceBetween: 50 },
            450: { slidesPerView: 3, spaceBetween: 50 },
            620: { slidesPerView: 3, },
            768: { slidesPerView: 4, },
            1024: { slidesPerView: 5, },
          }}
          className="marquee-swiper"
        >
          {/* Duplicate logos to ensure smooth looping */}
          {logos.concat(logos).map((logo, index) => (
            <SwiperSlide key={index} className="marquee-slide">
              <a href="#">
                <img src={logo} alt={`Logo ${index + 1}`} className="marquee-logo" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>

      {/* description section */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 9, position: "relative", width: "100%" }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(144, 19, 254, 0.1))",
          zIndex: -1,
          filter: "blur(60px)",
        }} />

        <Box sx={{
          maxWidth: "1454px",
          width: "100%",
          margin: "0 auto",
          display: "block",
        }}>
          {/* first section */}
          <Box
            ref={addToRefs}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                flex: 1,
                minWidth: "300px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #007FFF, #0047AB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "42px", xl: "50px" }
              }}
            >
              Leading Mobile App Development, Software Development & IT Consulting Company

            </Typography>

            <Box sx={{ flex: 1, maxWidth: "600px" }} >
              <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8, fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "21px", xl: "24px" }, mt: 2 }}>
              Founded in 2025, Metaphi Innovations is a leading Mobile App, Software Development, and Web Development company, driving digital transformation for businesses worldwide. As a trusted technology partner, we empower startups and enterprises alike to innovate, scale, and lead in their industries.
              </Typography>
            </Box>


          </Box>

          <Box
            ref={addToRefs}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              mt: 2,
              width: "100%",
            }}
          >
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
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Box>
          {/* second section */}
          <Box
            ref={addToRefs}
            sx={{
              display: 'flex',
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" },
              mt: 9
            }}
          >
            <Box sx={{ flex: 1, maxWidth: "600px" }} >
              <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8, fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "21px", xl: "24px" } }}>
              Unlock growth opportunities with robust software solutions, system modernization, and next-gen technologies—powered by a leading development company.
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                flex: 1,
                minWidth: "300px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #00FF7F,rgb(5, 107, 47))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "42px", xl: "50px" }
              }}
            >
              Accelerating Business Growth with Intelligent Solutions
            </Typography>

          </Box>

          <Box
            ref={addToRefs}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              mt: 2,
              width: "100%",
            }}
          >
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
        </Box>

      </Container>
    </>


  );
};

export default Home;
