import React from 'react'
import Title from "../components/CCTV and Facial Recognition Systems/Title"
import Description from "../components/CCTV and Facial Recognition Systems/Servicedescription"
import ContactUS from "../components/ContactUs"
import { VideoCameraOutlined, SmileOutlined, MobileOutlined, CloudOutlined, SafetyOutlined, SettingOutlined } from "@ant-design/icons";
import Services from "../components/Services"


function CCTVFacial() {
  const services = [
    {
      title: "Advanced CCTV Installation",
      description: "Deploy high-definition cameras with wide-angle coverage, night vision, and motion detection to ensure 24/7 surveillance.",
      icon: <VideoCameraOutlined />,
    },
    {
      title: "Facial Recognition Technology",
      description: "Implement cutting-edge facial recognition systems for accurate and secure access control, attendance tracking, and identification.",
      icon: <SmileOutlined />,
    },
    {
      title: "Integrated Security Solutions",
      description: "Seamlessly integrate CCTV and facial recognition systems with existing security frameworks for a unified approach to monitoring and protection.",
      icon: <MobileOutlined />,
    },
    {
      title: "Remote Monitoring",
      description: "Access live feeds and recorded footage from anywhere, anytime, through secure mobile or web applications.",
      icon: <CloudOutlined />,
    },
    {
      title: "Scalable System Design",
      description: "Build a security system that grows with your business, ensuring optimal performance as your needs evolve.",
      icon: <SafetyOutlined />,
    },
    {
      title: "Maintenance & Support",
      description: "Receive ongoing support and maintenance to keep your systems running smoothly, minimizing downtime and ensuring reliability.",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services
      title="Our Services"
      description="Enhance the security and efficiency of your operations with our advanced CCTV and facial recognition solutions."
      services={services}
    />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default CCTVFacial;
