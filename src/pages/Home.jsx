import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, CardActions } from "@mui/material";
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
import { Link } from "react-router-dom";
import serviceicon1 from "../images/gamedev.svg";
import serviceicon2 from "../images/appdev.svg";
import serviceicon3 from "../images/webdev.svg";
import serviceicon4 from "../images/ecommerce.svg";
import serviceicon5 from "../images/aiml.svg";
import serviceicon6 from "../images/iot.svg";
import serviceicon7 from "../images/devops.svg";
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

//cards
const services = [
  {
    id: "game-dev",
    title: "Game Development",
    icon: serviceicon1,
    description: "Transform your game ideas into high-quality, immersive 2D & 3D gaming experiences."
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: serviceicon2,
    description: "Empowering businesses with cutting-edge mobile solutions tailored to diverse industries."
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: serviceicon3,
    description: "Enhance your digital presence with cutting-edge web development solutions."
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    icon: serviceicon4,
    description: "Build seamless, secure, and high-performance eCommerce solutions."
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: "https://cdn-icons-png.flaticon.com/128/4881/4881901.png",
    description: "Empower your business with decentralized, secure, and innovative blockchain solutions."
  },
  {
    id: "salesforce",
    title: "Salesforce Solutions",
    icon: "https://cdn-icons-png.flaticon.com/128/889/889648.png",
    description: "Maximize the power of Salesforce to optimize operations and drive intelligent decision-making."
  },
  {
    id: "ai-ml",
    title: "AI & ML Solutions",
    icon: serviceicon5,
    description: "Harness the power of Artificial Intelligence and Machine Learning."
  },
  {
    id: "iot",
    title: "IoT & Embedded Solutions",
    icon: serviceicon6,
    description: "Transform your business with smart, connected devices and IoT infrastructure."
  },
  {
    id: "devops",
    title: "DevOps Solutions",
    icon: serviceicon7,
    description: "Streamline workflows, automate processes, and optimize infrastructure."
  }
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
  const lineRef = useRef(null);

  useEffect(() => {

    //line animation
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      {
        scaleX: 1,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    );

    //about sec animation
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
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    //hero animation
    const animateElements = () => {
      gsap.fromTo(
        [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      );
    };

    animateElements();

    //hero sec slide animation
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

  //cards
  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef([]);

  const handleFlip = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null); 
    } else {
      setFlippedCard(index);  
    }
  };

  useEffect(() => {
    services.forEach((_, index) => {
      const card = cardRefs.current[index];

      if (card) {
        gsap.to(card, {
          rotationY: flippedCard === index ? 180 : 0,  
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });
  }, [flippedCard]);

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
          allowTouchMove={true}
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
              <img src={logo} alt={`Logo ${index + 1}`} className="marquee-logo" />
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
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  color: "#fff",
                  borderColor: "rgba(0, 26, 255, 0.87)",
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "rgba(0, 26, 255, 0.87)",
                    color: "#fff",
                  },
                }}
              >
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Box>


          </Box>

          {/* Line */}
          <Box
            ref={lineRef}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 2
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "1454px",
                height: "1px",
                backgroundImage: "linear-gradient(to right, #007FFF, #00C87F)",
                borderRadius: "200px"
              }}
            />
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
              mt: 2
            }}
          >
            <Box sx={{ flex: 1, maxWidth: "600px" }} >
              <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8, fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "21px", xl: "24px" } }}>
                Unlock growth opportunities with robust software solutions, system modernization, and next-gen technologies—powered by a leading development company.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  color: "#fff",
                  borderColor: "rgba(0, 255, 0, 0.69)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 3,
                  "&:hover": {
                    backgroundColor: "rgba(0, 255, 0, 0.69)",
                    color: "#fff",
                  },

                }}
              >
                Services <FontAwesomeIcon icon={faArrowRight} />
              </Button>
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

          </Box>
        </Box>



      </Container>

      {/* services section */}
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
          Solutions We Offer
        </Typography>

        <Box
          sx={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 3,
            py: 6,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                perspective: "1000px",
                position: "relative",
                width: "100%",
                height: "290px",
                transformStyle: "preserve-3d",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleFlip(index)}
            >
              {/* Front Side */}
              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "20px",
                  boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)", 
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)",
                  },
                }}

              >
                <CardContent>
                  <img src={service.icon} alt={service.title} style={{ width: "50px", height: "50px" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd", mt: 1 }}>
                    {service.description}
                  </Typography>

                </CardContent>
              </Card>

              {/* Back Side */}
              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                  boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)",
                  },
                }}

              >
                <CardContent>
                  <img src={service.icon} alt={`icon for ${service.title}`} style={{ width: "50px", height: "50px" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {service.title} Features
                  </Typography>
                  <Typography sx={{ fontSize: "14px", mt: 1 }}>
                    {service.description}
                  </Typography>
                  <Link to="/about">
                    <Button
                      sx={{
                        mt: 5,
                        px: 3,
                        py: 1.5,
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                        color: "#fff",
                        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(20, 20, 20, 1))",
                          boxShadow: "0px 6px 20px rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    >
                      Learn More
                    </Button>

                  </Link>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

    </>


  );
};

export default Home;
