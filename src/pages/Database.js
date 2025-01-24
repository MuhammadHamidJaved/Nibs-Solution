import React from 'react'
import Title from "../components/Database/Title"
import Description from "../components/Database/AppDevServiceDescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { DatabaseOutlined, RocketOutlined, LockOutlined, SwapOutlined, ExpandOutlined, CustomerServiceOutlined } from "@ant-design/icons";

const services = [
  {
    title: "Database Design & Development",
    description: "Craft robust and scalable database architectures tailored to your unique business requirements.",
    icon: <DatabaseOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Performance Optimization",
    description: "Enhance the efficiency of your databases with regular performance monitoring and optimization to ensure fast and reliable operations.",
    icon: <RocketOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Data Security & Integrity",
    description: "Safeguard your sensitive data with advanced encryption, access control, and backup strategies to prevent unauthorized access and data loss.",
    icon: <LockOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Migration & Integration",
    description: "Seamlessly migrate data from legacy systems to modern platforms or integrate databases with existing applications for unified operations.",
    icon: <SwapOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "Scalability Solutions",
    description: "Build databases that grow with your business, ensuring they remain efficient and reliable even as your data needs expand.",
    icon: <ExpandOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
  {
    title: "24/7 Support & Maintenance",
    description: "Receive round-the-clock assistance to address issues, minimize downtime, and keep your databases running smoothly.",
    icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
  },
];

function Database() {
  return (
    <div>
      <Title />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <div style={{ paddingTop: '40px', background: '#fff' }}>
      <Services  title="Our Services"
      description="Explore our range of professional database services designed to empower your business."
      services={services} />
      </div>
      <ContactUS />
      </div>
      
    </div>
  )
}

export default Database;
