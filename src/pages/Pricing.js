import React from 'react'
import Title from "../components/Competitive pricing/Title"
import Description from "../components/Competitive pricing/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { DollarCircleOutlined, SlidersOutlined, CustomerServiceOutlined, SolutionOutlined } from "@ant-design/icons";

const services = [
    {
        title: "Affordable IT Solutions",
        description: "Cost-effective IT solutions customized to fit your budget and business needs.",
        icon: <DollarCircleOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Flexible Pricing Models",
        description: "Choose from various pricing options suitable for businesses of all sizes.",
        icon: <SlidersOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "24/7 Customer Support",
        description: "Round-the-clock support to assist with IT-related issues and queries.",
        icon: <CustomerServiceOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
    {
        title: "Expert IT Consultancy",
        description: "Optimize your IT infrastructure with strategic consulting from industry experts.",
        icon: <SolutionOutlined style={{ fontSize: "32px", color: "#003399" }} />,
    },
];

function Pricing() {
return (
    <div>
        <Title />
        <div style={{ padding: '40px 70px', background: '#fff' }}>
            <Description />
            <div style={{ paddingTop: '40px', background: '#fff' }}>
                <Services 
                    title="Our Services"
                    description="Explore our comprehensive range of IT hardware procurement and support services designed to meet your business needs."
                    services={services} 
                />
            </div>
            <ContactUS />
        </div>
    </div>
)
}

export default Pricing;
