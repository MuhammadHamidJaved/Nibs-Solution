import React from "react";
import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Services = ({ title, description, services }) => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <Title level={1} style={{ textAlign: "center", color: "#003399", marginBottom: "20px" }}>{title}</Title>
      <Paragraph style={{ textAlign: "center", fontSize: "clamp(16px, 2vw, 18px)", color: "#333", marginBottom: "40px" }}>
        {description}
      </Paragraph>
      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={24} md={12} lg={8} key={index}>
            <Card
              style={{
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                height: "auto", 
                padding: "16px", 
              }}
              hoverable
            >
              <div style={{ marginBottom: "16px", fontSize: "32px", color: "#003399" }}>
                {service.icon}
              </div>
              <Title level={3} style={{ color: "#003399", fontSize: "clamp(16px, 2vw, 18px)", fontWeight: "bold", marginBottom: "10px" }}>
                {service.title}
              </Title>
              <Paragraph style={{ color: "#333", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: "1.6", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                {service.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
          .ant-card {
            height: auto !important; /* Allow cards to expand as needed */
          }
          .ant-card h3 {
            font-size: 16px;
          }
          .ant-card p {
            WebkitLineClamp: 4; /* Allow more lines for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
