import React from 'react'
import Title from "../components/DNCR/Title"
import Description from "../components/DNCR/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { 
  CheckCircleOutlined, 
  EditOutlined, 
  DatabaseOutlined, 
  BookOutlined,
  SafetyOutlined,
  FileSearchOutlined 
} from "@ant-design/icons";

const services = [
  {
    title: "Automated DNC List Management",
    description: "Simplify compliance with automated tools that manage and update your DNC lists regularly, ensuring you stay up to date with the latest regulations.",
    icon: <CheckCircleOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Real-Time Scrubbing & Validation",
    description: "Instantly verify customer contact numbers against national and state DNC registries to avoid non-compliant calls.",
    icon: <EditOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Custom Compliance Solutions",
    description: "Tailor compliance strategies to meet the specific needs of your industry, ensuring seamless integration with your business processes.",
    icon: <DatabaseOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Regulatory Updates & Training",
    description: "Stay informed about changes in DNC regulations with regular updates and training sessions for your team.",
    icon: <BookOutlined style={{ fontSize: "32px", color: "#003399" }} />, // Updated icon
  },
  {
    title: "Risk Assessment & Mitigation",
    description: "Identify potential compliance risks and implement proactive measures to safeguard your business against violations and fines.",
    icon: <SafetyOutlined style={{ fontSize: "32px", color: "#003399" }} />, // Updated icon
  },
  {
    title: "Audit Support",
    description: "Prepare for audits with detailed reporting and documentation that demonstrate your commitment to regulatory compliance.",
    icon: <FileSearchOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
];

function DNCR() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services title="Our Services"
      description="Explore our range of DNCR compliance services designed to help your business navigate regulations effortlessly while enhancing operational efficiency."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default DNCR;
