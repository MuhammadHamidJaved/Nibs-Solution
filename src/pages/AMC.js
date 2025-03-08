import React from 'react'
import Title from "../components/AMC for IT/Title"
import Description from "../components/AMC for IT/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { AuditOutlined, CloudSyncOutlined, WifiOutlined, DesktopOutlined, CustomerServiceOutlined, SafetyOutlined } from "@ant-design/icons";

const services = [
    {
        title: "System Performance Audits",
        description: "Conduct regular audits to optimize system performance and efficiency.",
        icon: <AuditOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Software Updates & Patch Management",
        description: "Ensure all software is up to date with regular patches and updates for security and performance.",
        icon: <CloudSyncOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Network Monitoring & Security",
        description: "Proactive network monitoring and security enhancements to prevent cyber threats.",
        icon: <WifiOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Hardware Maintenance & Repair",
        description: "Maintain and repair IT hardware to ensure long-term reliability and performance.",
        icon: <DesktopOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "24/7 IT Support",
        description: "Get round-the-clock remote and onsite IT support for critical issues.",
        icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Preventive Maintenance",
        description: "Minimize downtime with preventive maintenance strategies and regular checkups.",
        icon: <SafetyOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
];

function AMC() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services  title="Our Services"
      description="Explore our range of professional AMC services designed to empower your business."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default AMC;
