import React from "react";
import { Row, Col, Card } from "antd";
import { CheckCircleOutlined, TeamOutlined, GlobalOutlined, StarOutlined, HeartOutlined } from "@ant-design/icons";
import "./CoreValues.css";

const values = [
  {
    key: "1",
    icon: <CheckCircleOutlined style={{ fontSize: "48px", color: "#003399" }} />,
    title: "Integrity",
    description: "We adhere to the highest standards of ethical practices, ensuring trust and transparency in all our actions.",
  },
  {
    key: "2",
    icon: <TeamOutlined style={{ fontSize: "48px", color: "#003399" }} />,
    title: "Collaboration",
    description: "Our success stems from teamwork and partnerships, leveraging diverse perspectives to achieve shared goals.",
  },
  {
    key: "3",
    icon: <GlobalOutlined style={{ fontSize: "48px", color: "#003399" }} />,
    title: "Innovation",
    description: "We foster creativity and embrace technology to deliver cutting-edge solutions for modern challenges.",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest quality in every aspect of our services and solutions.",
    icon: <StarOutlined style={{ fontSize: "36px", color: "#003399" }} />, 
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your needs, delivering solutions that drive value and satisfaction.",
    icon: <HeartOutlined style={{ fontSize: "36px", color: "#003399" }} />, 
  },
];

const CoreValues = () => {
  return (
    <div className="core-values-container">
      <h1 className="core-values-title">Our Core Values</h1>
      <p className="core-values-subtitle">
        At the heart of everything we do are the values that define our company and guide us in delivering excellence.
      </p>
      <Row gutter={[16, 16]}>
        {values.map((value) => (
          <Col key={value.key} xs={24} sm={12} md={12} lg={8} xl={8}>
            <Card
              className="core-value-card"
              hoverable
              style={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="core-value-icon">{value.icon}</div>
              <h3 className="core-value-title">{value.title}</h3>
              <p className="core-value-description">{value.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoreValues;
