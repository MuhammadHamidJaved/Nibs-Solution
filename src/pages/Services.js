import React from "react";
import { Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "../components/css/Services.css"; 
import img0 from "../Images/MS.jpeg";
import img1 from "../Images/AMC.webp";
import img2 from "../Images/device.jpeg";
import img3 from "../Images/CP.png";
import img4 from "../Images/ISP.jpeg";
import img5 from "../Images/Cloud.jpeg";
import img6 from "../Images/Print.jpeg";


const { Meta } = Card;

const array = [
  {
    key: "0",
    label: "Database Management",
    children:
      "Efficient database management solutions to streamline data processes, ensure integrity, and enhance scalability.",
    link: "/Database-Management",
    img: "https://media.istockphoto.com/id/2073120208/photo/crm-customer-relationship-management-concept-global-business-customer-network-technology-data.jpg?s=612x612&w=0&k=20&c=_T3U2gDvk1OhKnTLJ3Ekdzrew9VXGJDPJe9sF7MS41M=",
  },
  {
    key: "1",
    label: "DNCR Compliance Services",
    children:
      "Navigate Do-Not-Call regulations effortlessly with our DNCR compliance services, enhancing operational efficiency.",
    link: "/DNCR",
    img: "https://img.freepik.com/premium-photo/compliance-rule-law-regulation-graphic-interface-business-quality-policy_31965-16023.jpg",
  },
  {
    key: "2",
    label: "CCTV/Facial Recognition Systems",
    children:
      "Advanced CCTV and facial recognition solutions for comprehensive surveillance and intelligent monitoring.",
    link: "/CCTVFacialRecognition",
    img: "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=",
  },
  {
    key: "3",
    label: "Advanced Network Infrastructure",
    children:
      "Reliable, scalable telecom and network infrastructure solutions for seamless connectivity and optimal performance.",
    link: "/AdvancedNetworkInfrastructure",
    img: "https://t3.ftcdn.net/jpg/09/27/16/78/360_F_927167869_BtuhDRiKXyEI1MSN2MvvP89hJHX2Dtm8.jpg",
  },
  {
    key: "4",
    label: "Digital Display Integration",
    children:
      "Seamless digital display integration services to elevate brand visibility and enhance customer experiences.",
    link: "/Display-Integration",
    img: "https://www.shutterstock.com/image-photo/integrated-document-solutions-online-system-260nw-2352136125.jpg",
  },
  {
    key: "5",
    label: "Office/ Google Workspace Support",
    children:
      "Seamless cloud-based collaboration and productivity solutions to enhance business efficiency, ensuring smooth integration, security, and ongoing technical support.",
    link: "/Microsoft-GoogleSupport",
    img: img0,
  },
  {
    key: "6",
    label: "AMC for IT Work",
    children:
      "Proactive IT maintenance and support services to minimize downtime, optimize system performance, and ensure business continuity with 24/7 assistance.",
    link: "/AMC",
    img: img1,
  },
  {
    key: "7",
    label: "IT Device Procurement",
    children:
      "Reliable sourcing and procurement of high-quality IT hardware, ensuring businesses get the best technology solutions at competitive prices with expert setup and support.",
    link: "/IT-devices",
    img: img2,
  },
  {
    key: "8",
    label: "Competitive Pricing & Services",
    children:
      "Cost-effective IT solutions tailored to your business needs, offering high-quality services with transparent pricing and dedicated customer support.",
    link: "/Competitive-Pricing",
    img: img3,
  },
  {
    key: "9",
    label: "Cloud-Based Telecommunication",
    children:
      "Scalable and flexible cloud telecom solutions, including VoIP, cloud PBX, and advanced communication tools, ensuring seamless business connectivity.",
    link: "/cloud-based-telecommunication",
    img: img5,
  },
  {
    key: "10",
    label: "Cost-Effective Printing Solutions",
    children:
      "Optimized printing solutions designed to reduce operational costs while maintaining high-quality output, secure document printing, and workflow efficiency.",
    link: "/Cost-Effective-Printing",
    img: img6,
  },
  {
    key: "11",
    label: "ISP Support for Etisalat / DU",
    children:
      "Expert assistance for ISP selection, setup, and troubleshooting to ensure high-speed, reliable internet connectivity for smooth business operations.",
    link: "/ISP",
    img: img4,
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
