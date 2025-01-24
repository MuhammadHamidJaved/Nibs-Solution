import React from 'react'
import Title from "../components/DigitalDisplay/Title"
import Description from "../components/DigitalDisplay/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import {
  AppstoreAddOutlined,
  FileTextOutlined,
  LaptopOutlined,
  ExpandOutlined,
  VideoCameraOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const services = [
  {
    title: "Custom Digital Display Solutions",
    description: "Design and implement tailored digital displays that align with your business goals and aesthetic preferences.",
    icon: <AppstoreAddOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Content Management Integration",
    description: "Ensure smooth and efficient content updates with user-friendly content management systems that sync seamlessly with your displays.",
    icon: <FileTextOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Interactive Display Technology",
    description: "Engage your audience with interactive touchscreens, kiosks, and other dynamic display options that offer a personalized experience.",
    icon: <LaptopOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Scalable Solutions",
    description: "Build a display network that grows with your business, from single-location setups to multi-site installations.",
    icon: <ExpandOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "High-Resolution Displays",
    description: "Deliver stunning visuals with cutting-edge display technology, ensuring clarity and impact in any environment.",
    icon: <VideoCameraOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Maintenance & Support",
    description: "Keep your displays running flawlessly with our ongoing maintenance and technical support services.",
    icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
];

function DigitalDisplay() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services title="Our Services"
      description="Explore our range of seamless digital display integration services designed to elevate your brand and engage your audience."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default DigitalDisplay;
