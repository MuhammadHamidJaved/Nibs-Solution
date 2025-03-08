import React from "react";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Title level={1} style={{ color: "#003399", fontWeight: "bold", marginBottom: "20px" }}>
        About Us
      </Title>
      <Paragraph style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#333", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
        We specialize in delivering cutting-edge solutions in <b>AI, automation, cybersecurity, and telecom</b>. 
        Our expertise empowers businesses to thrive in the ever-evolving tech landscape, ensuring 
        innovative and reliable services tailored to your unique needs.
      </Paragraph>
      <Paragraph style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#333", lineHeight: "1.8", maxWidth: "800px", margin: "20px auto" }}>
        Driven by our commitment to <b>innovation and excellence</b>, we strive to push boundaries and provide 
        transformative solutions that fuel your growth. Partner with us to unlock the potential of 
        advanced technology for your business success.
      </Paragraph>
      <Button
        type="primary"
        href="/about"
        style={{ marginTop: "20px", backgroundColor: "#003399", borderColor: "#003399" }}
      >
        Learn More
      </Button>
    </div>
  );
};

export default AboutUs;
