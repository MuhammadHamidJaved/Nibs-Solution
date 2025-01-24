import React from 'react'
import Title from "../components/Advanced Network Infrastructure/Title"
import Description from "../components/Advanced Network Infrastructure/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { WifiOutlined, RocketOutlined, PhoneOutlined, CloudOutlined, CustomerServiceOutlined, SecurityScanOutlined } from "@ant-design/icons";

const services = [
  {
    title: "Network Design & Deployment",
    description: "Develop robust and scalable network architectures tailored to your business’s unique requirements.",
    icon: <WifiOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Advanced Network Optimization",
    description: "Enhance network performance with innovative optimization techniques, ensuring faster speeds and minimal downtime.",
    icon: <RocketOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Telecom Infrastructure Solutions",
    description: "Build and maintain reliable telecommunication systems that support voice, data, and video communications with superior quality.",
    icon: <PhoneOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Cloud Integration",
    description: "Leverage cloud-based solutions to increase flexibility, scalability, and cost efficiency in your network operations.",
    icon: <CloudOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "24/7 Monitoring & Support",
    description: "Ensure uninterrupted business operations with proactive monitoring and round-the-clock technical support.",
    icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Security & Compliance",
    description: "Protect your network from potential threats with advanced security measures and ensure compliance with industry standards.",
    icon: <SecurityScanOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
];

function NetworkInfrastructure() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services title="Our Services"
      description="Explore our range of telecom and advanced network infrastructure services designed to empower your business."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default NetworkInfrastructure;
