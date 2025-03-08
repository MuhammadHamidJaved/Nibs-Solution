import React from 'react'
import Title from "../components/Device procurment/Title"
import Description from "../components/Device procurment/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { ShoppingCartOutlined, ToolOutlined, DollarCircleOutlined, SettingOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const services = [
    {
        title: "Latest IT Hardware Sourcing",
        description: "Supply cutting-edge IT hardware tailored to your business needs.",
        icon: <ShoppingCartOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Customized Procurement Solutions",
        description: "Get personalized procurement strategies based on your business requirements.",
        icon: <ToolOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Bulk Purchase Discounts",
        description: "Avail exclusive bulk purchase discounts and cost-effective pricing.",
        icon: <DollarCircleOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Installation & Configuration",
        description: "Professional setup, installation, and configuration services for your IT hardware.",
        icon: <SettingOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Warranty & Technical Support",
        description: "Enjoy post-purchase warranty services and ongoing technical support.",
        icon: <SafetyCertificateOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
];

function ITDevices() {
return (
    <div>
        <Title />
        <div style={{ padding: '40px 70px', background: '#fff' }}>
            <Description />
            <div style={{ paddingTop: '40px', background: '#fff' }}>
                <Services 
                    title="Our Services"
                    description="Explore our comprehensive range of IT procurement services designed to meet your business needs."
                    services={services} 
                />
            </div>
            <ContactUS />
        </div>
    </div>
)
}

export default ITDevices;
