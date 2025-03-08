import React from 'react'
import Title from "../components/Microsoft 365/Title"
import Description from "../components/Microsoft 365/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { CloudUploadOutlined, MailOutlined, UserOutlined, ToolOutlined, DatabaseOutlined, ReadOutlined } from "@ant-design/icons";

const services = [
    {
        title: "Setup & Migration",
        description: "Seamless migration to Office 365 and Google Workspace with minimal downtime.",
        icon: <CloudUploadOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Email Configuration & Security",
        description: "Enhance email security with advanced spam filters, encryption, and multi-factor authentication.",
        icon: <MailOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "User Management & Access Control",
        description: "Manage user roles, permissions, and access to ensure data security and compliance.",
        icon: <UserOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Technical Support & Troubleshooting",
        description: "Resolve issues quickly with our expert troubleshooting and 24/7 technical support.",
        icon: <ToolOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Cloud Storage & Backup",
        description: "Optimize cloud storage solutions and implement reliable data backup strategies.",
        icon: <DatabaseOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Training & Best Practices",
        description: "Empower your team with training sessions and best practices for Office 365 & Google Workspace.",
        icon: <ReadOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
];

function Microsoft365() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services  title="Our Services"
      description="Explore our range of professional Microsoft 365 and Google Workspace services designed to empower your business."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default Microsoft365;
