import React from 'react'
import Title from "../components/ISP Support/Title"
import Description from "../components/ISP Support/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { GlobalOutlined, SettingOutlined, ToolOutlined, SafetyCertificateOutlined, LockOutlined } from "@ant-design/icons";

const services = [
    {
        title: "ISP Selection Guidance",
        description: "Get expert advice on choosing the best ISP based on your business requirements.",
        icon: <GlobalOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Router & Network Setup",
        description: "Professional installation and configuration of routers, firewalls, and networks.",
        icon: <SettingOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Troubleshooting & Support",
        description: "Quick resolution of internet connectivity and network issues with expert support.",
        icon: <ToolOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Bandwidth Optimization & Security",
        description: "Enhance network performance and security with bandwidth management solutions.",
        icon: <SafetyCertificateOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "VPN Setup for Secure Remote Access",
        description: "Implement secure VPN solutions for safe and private remote connectivity.",
        icon: <LockOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
];

function ISPSupport() {
return (
    <div>
        <Title />
        <div style={{ padding: '40px 70px', background: '#fff' }}>
            <Description />
            <div style={{ paddingTop: '40px', background: '#fff' }}>
                <Services 
                    title="Our Services"
                    description="Explore our comprehensive range of ISP support services designed to meet your business needs."
                    services={services} 
                />
            </div>
            <ContactUS />
        </div>
    </div>
)
}

export default ISPSupport;
