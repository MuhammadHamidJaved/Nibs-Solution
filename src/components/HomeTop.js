import "./css/HomeTop.css";
import { Button, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Layout className="App">
      <div className="background-image"></div>
      <Content className="Content">
        <div className="site-layout-content" style={{ padding: "20px" }}>
          <Title
            level={1}
            style={{
              fontSize: "clamp(2rem, 8vw, 4.5rem)", // Responsive font size
              marginBottom: "50px",
              width: "60%",
              marginLeft: "18%",
              marginTop: "5%",
              textAlign: "center", // Center align for better responsiveness
            }}
          >
            Innovating Tomorrow, Securing Today – Your Partner in Cutting-Edge Tech Solutions
          </Title>
          <Paragraph
            style={{
              fontSize: "clamp(1rem, 3vw, 1.6rem)", // Responsive font size
              marginBottom: "50px",
              width: "55%",
              marginLeft: "22%",
              color: "darkslategray",
              textAlign: "center", // Center align for better responsiveness
            }}
          >
            We deliver innovative, future-ready technology solutions while ensuring the security and reliability businesses need today.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{ margin: "10px", color: "white", fontWeight: "bolder" }}
          >
            Request a Free Consultation
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;