import React from 'react'
import Title from "../components/Cost-Effective Printing Solutions/Title"
import Description from "../components/Cost-Effective Printing Solutions/Servicedescription"
import ContactUS from "../components/ContactUs"
import Services from '../components/Services'
import { PrinterOutlined, CloudSyncOutlined, ToolOutlined, SafetyCertificateOutlined, DollarOutlined } from "@ant-design/icons";

const services = [
    {
        title: "Managed Print Services",
        description: "Reduce operational costs with efficient print management solutions.",
        icon: <DollarOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Printer Supply & Installation",
        description: "Get high-quality printers and multifunction devices with professional setup.",
        icon: <PrinterOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Cloud & Wireless Printing",
        description: "Enable seamless cloud-based and wireless printing for your business.",
        icon: <CloudSyncOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Preventive Maintenance & Support",
        description: "Ensure smooth operations with regular maintenance and fast troubleshooting.",
        icon: <ToolOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
      {
        title: "Secure Printing & Workflow Automation",
        description: "Enhance security and efficiency with encrypted printing and automated workflows.",
        icon: <SafetyCertificateOutlined style={{ fontSize: "32px", color: "#003399" }} />,
      },
];

function CostEffective() {
return (
    <div>
        <Title />
        <div style={{ padding: '40px 70px', background: '#fff' }}>
            <Description />
            <div style={{ paddingTop: '40px', background: '#fff' }}>
                <Services 
                    title="Our Services"
                    description="Explore our range of cost-effective printing solutions designed to meet your business needs."
                    services={services} 
                />
            </div>
            <ContactUS />
        </div>
    </div>
)
}

export default CostEffective;
