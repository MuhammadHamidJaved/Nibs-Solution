import React from 'react'
import Title from "../components/Cloud based telecommunication/Title"
import Description from "../components/Cloud based telecommunication/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { PhoneOutlined, CloudServerOutlined, ApiOutlined, SyncOutlined, CustomerServiceOutlined } from "@ant-design/icons";

const services = [
    {
        title: "VoIP Solutions",
        description: "Seamless business communication with reliable VoIP solutions.",
        icon: <PhoneOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Cloud PBX & Hosted Phone Systems",
        description: "Set up a cloud-based phone system for flexible and scalable communication.",
        icon: <CloudServerOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Platform Integration",
        description: "Integrate with Microsoft Teams, Zoom, and other communication platforms.",
        icon: <ApiOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Call Routing & IVR",
        description: "Configure call routing, IVR, and auto-attendant for enhanced customer experience.",
        icon: <SyncOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "24/7 Monitoring & Support",
        description: "Ensure uninterrupted communication with round-the-clock monitoring and support.",
        icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
];

function Cloud() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services  title="Our Services"
      description="Explore our range of professional Cloud based telecmmunication services designed to empower your business."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default Cloud;
