import { Layout, Image, Menu } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";
import logo from "../logo/Capture-removebg-preview.png";

const { Header } = Layout;
const { SubMenu } = Menu;

export default function Navbar() {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services"); // Redirect to the services page
  };

  return (
    <Header className="Header">
      <Image
        src={logo}
        alt="Logo"
        style={{
          height: "200px",
          marginTop: "10px",
        }}
        preview={false}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ marginLeft: "auto", backgroundColor: "white" }}
        disabledOverflow
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          style={{ textAlign: "center" }}
          onClick={() => navigate("/")}
        >
          Home
        </Menu.Item>

        {/* Services SubMenu */}
        <SubMenu
          key="2"
          icon={<BarChartOutlined />}
          title="Services"
          onTitleClick={handleServicesClick} // Redirect when the title is clicked
          style={{ textAlign: "center" }}
        >
          <Menu.Item key="2-1" onClick={() => navigate("/Database-Management")}>
            Database Management
          </Menu.Item>
          <Menu.Item key="2-2" onClick={() => navigate("/DNCR")}>
            DNCR Compliance Services
          </Menu.Item>
          <Menu.Item key="2-3" onClick={() => navigate("/CCTVFacialRecognition")}>
            CCTV and Facial Recognition Systems
          </Menu.Item>
          <Menu.Item key="2-4" onClick={() => navigate("/AdvancedNetworkInfrastructure")}>
            Advanced Network Infrastructure
          </Menu.Item>
          <Menu.Item key="2-5" onClick={() => navigate("/Display-Integration")}>
            Seamless Digital Display Integration
          </Menu.Item>
          <Menu.Item key="2-6" onClick={() => navigate("/Microsoft-GoogleSupport")}>
          Microsoft  Office 365 / Google Workspace Support
          </Menu.Item>
          <Menu.Item key="2-7" onClick={() => navigate("/AMC")}>
          AMC for IT work
          </Menu.Item>
          <Menu.Item key="2-8" onClick={() => navigate("/IT-devices")}>
          IT devices Procurement
          </Menu.Item>
          <Menu.Item key="2-9" onClick={() => navigate("/Competitive-Pricing")}>
          Competitive Pricing & Services with Support
          </Menu.Item>
          <Menu.Item key="2-10" onClick={() => navigate("/cloud-based-telecommunication")}>
          Cloud-Based Telecommunication Solutions
          </Menu.Item>
          <Menu.Item key="2-11" onClick={() => navigate("/Cost-Effective-Printing")}>
          Cost-Effective Printing Solutions
          </Menu.Item>
          <Menu.Item key="2-12" onClick={() => navigate("/ISP")}>
          ISP Support for Etisalat / DU
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key="3"
          icon={<InfoCircleOutlined />}
          style={{ textAlign: "center" }}
          onClick={() => navigate("/about")}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<PhoneOutlined />}
          style={{ textAlign: "center" }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Menu.Item>
      </Menu>
    </Header>
  );
}