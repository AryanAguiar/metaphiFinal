import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { gsap } from "gsap";

const services = [
  { id: "mobile-app", title: "Mobile App", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?mobile", description: "Create high-performance mobile applications for iOS and Android.", features: ["Cross-Platform", "Native Apps", "UI/UX Design", "App Store Deployment"] },
  { id: "website", title: "Website", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?website", description: "Modern, scalable, and responsive website solutions.", features: ["Frontend & Backend", "E-Commerce", "SEO Optimization", "CMS Integration"] },
  { id: "ecommerce", title: "E-commerce", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?ecommerce", description: "Launch powerful online stores with seamless shopping experiences.", features: ["WooCommerce", "Shopify", "Payment Integration", "Custom Solutions"] },
  { id: "blockchain", title: "Blockchain", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?blockchain", description: "Secure blockchain solutions for decentralized applications.", features: ["Ethereum", "Hyperledger", "Smart Contracts", "NFT Marketplace"] },
  { id: "iot", title: "IoT", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?iot", description: "Smart IoT solutions for automation and data analytics.", features: ["Smart Devices", "Cloud Integration", "AI Automation", "Real-time Monitoring"] },
  { id: "ai", title: "AI & ML", subtitle: "DEVELOPMENT", image: "https://source.unsplash.com/300x400/?ai", description: "AI-powered solutions to automate and enhance business operations.", features: ["Machine Learning", "AI Chatbots", "Data Analytics", "Deep Learning"] },
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]); // Default selected service
  const infoRef = useRef(null);

  useEffect(() => {
    if (infoRef.current) {
      gsap.fromTo(infoRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" });
    }
  }, [selectedService]);

  return (
    <Box sx={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, py: 6 }}>
      {/* Left: Cards Section */}
      <Box sx={{ flex: 2, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
        {services.map((service) => (
          <Card
            key={service.id}
            onClick={() => setSelectedService(service)}
            sx={{
              position: "relative",
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              borderRadius: "10px",
              overflow: "hidden",
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>{service.subtitle}</Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Right: Info Section */}
      <Box sx={{ flex: 1, background: "#111", padding: 3, borderRadius: "10px", color: "#fff", minHeight: "250px" }} ref={infoRef}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>{selectedService.title} Development</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>{selectedService.description}</Typography>
        <Box sx={{ mt: 2 }}>
          {selectedService.features.map((feature, index) => (
            <Typography key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              ✅ {feature}
            </Typography>
          ))}
        </Box>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: "#007FFF", "&:hover": { backgroundColor: "#00FF7F" } }}>Learn More</Button>
      </Box>
    </Box>
  );
};

export default ServiceSection;
