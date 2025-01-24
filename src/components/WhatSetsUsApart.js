import React from "react";
import { Row, Col, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const reasons = [
  {
    title: "Innovative Technology Expertise",
    description:
      "We specialize in cutting-edge solutions in AI, automation, cybersecurity, and telecom, ensuring your business stays ahead in the digital age.",
  },
  {
    title: "Tailored Solutions",
    description:
      "Our services are customized to meet your unique business needs, delivering results that drive growth and efficiency.",
  },
  {
    title: "Proven Reliability",
    description:
      "With a track record of successful projects, we are committed to providing dependable and scalable solutions.",
  },
  {
    title: "End-to-End Support",
    description:
      "From consultation to implementation and beyond, we offer comprehensive support at every step of the journey.",
  },
  {
    title: "Security-First Approach",
    description:
      "Your data and systems' security are our top priorities, backed by robust cybersecurity strategies.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team of experts brings years of industry experience, ensuring high-quality and innovative results.",
  },
  {
    title: "Customer-Centric Philosophy",
    description:
      "We partner with clients to understand their goals and challenges, delivering personalized services with exceptional attention to detail.",
  },
  {
    title: "Future-Ready Solutions",
    description:
      "We integrate the latest technologies, helping your business adapt to the rapidly changing digital landscape.",
  },
];

const HomePage = () => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", color: "#003399", marginBottom: "20px" }}>
        Why Choose Nibs Solution?
      </h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#333", marginBottom: "40px" }}>
        Discover the benefits of working with us and how our expertise can drive your business forward.
      </p>
      <Row gutter={[24, 24]} justify="center">
        {reasons.map((reason, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              style={{
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
              hoverable
            >
              <div
                style={{
                  marginBottom: "16px",
                  color: "#003399",
                  fontSize: "32px",
                }}
              >
                <CheckCircleOutlined />
              </div>
              <h3
                style={{
                  color: "#003399",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  color: "#333",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  paddingBottom: "20px",
                }}
              >
                {reason.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
