import React from "react";
import { Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "../components/css/Services.css"; 

const { Meta } = Card;

const array = [
  {
    key: "0",
    label: "Database Management",
    children:
      "In today’s data-driven world, efficient database management is critical to business success. Our comprehensive database management solutions are designed to streamline your data processes, ensure integrity, and enhance scalability for seamless business growth.",
    link: "/Database-Management",
    img: "https://media.istockphoto.com/id/2073120208/photo/crm-customer-relationship-management-concept-global-business-customer-network-technology-data.jpg?s=612x612&w=0&k=20&c=_T3U2gDvk1OhKnTLJ3Ekdzrew9VXGJDPJe9sF7MS41M=",
  },
  {
    key: "1",
    label: "DNCR Compliance Services",
    children:
      "Maintaining compliance with Do-Not-Call (DNC) regulations is essential for businesses to build trust, avoid penalties, and foster positive customer relationships. Our DNCR compliance services are designed to help your organization navigate these regulations effortlessly while enhancing operational efficiency.",
    link: "/DNCR",
    img: "https://img.freepik.com/premium-photo/compliance-rule-law-regulation-graphic-interface-business-quality-policy_31965-16023.jpg",
  },
  {
    key: "2",
    label: "CCTV and Facial Recognition Systems",
    children:
      "Enhance the security and efficiency of your operations with our advanced CCTV and facial recognition solutions. Designed to meet the evolving needs of modern businesses, our systems provide comprehensive surveillance, seamless access control, and intelligent monitoring capabilities.",
    link: "/CCTVFacialRecognition",
    img: "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=",
  },
  {
    key: "3",
    label: "Advanced Network Infrastructure",
    children:
      "Empower your business with reliable, scalable, and cutting-edge telecom and network infrastructure solutions. We design and implement advanced systems that ensure seamless connectivity, optimal performance, and round-the-clock support to keep your operations running smoothly.",
    link: "/AdvancedNetworkInfrastructure",
    img: "https://t3.ftcdn.net/jpg/09/27/16/78/360_F_927167869_BtuhDRiKXyEI1MSN2MvvP89hJHX2Dtm8.jpg",
  },
  {
    key: "4",
    label: "Seamless Digital Display Integration",
    children:
      "Transform the way you communicate, engage, and captivate your audience with our seamless digital display integration services. From immersive advertising to interactive information sharing, our solutions are designed to elevate your brand visibility and enhance customer experiences.",
    link: "/Display-Integration",
    img: "https://www.shutterstock.com/image-photo/integrated-document-solutions-online-system-260nw-2352136125.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px", marginBottom: "20px" }}>
        Our Services
      </h1>
      <Row gutter={[16, 16]}>
        {array.map((item) => (
          <Col key={item.key} xs={24} sm={24} md={12} lg={8} xl={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.label}
                  src={item.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              onClick={() => handleCardClick(item.link)}
              style={{
                height: "450px", // Fixed height for consistency
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Meta
                title={<span style={{ fontSize: "20px", fontWeight: "bold" }}>{item.label}</span>}
                description={
                  <div style={{ maxHeight: "120px", overflow: "auto", fontSize: "16px" }}>
                    {item.children}
                  </div>
                }
              />
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#003399",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item.link);
                }}
              >
                Learn More
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
