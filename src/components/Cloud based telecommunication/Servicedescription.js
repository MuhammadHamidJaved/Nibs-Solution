import React from 'react';
import { Typography, Row, Col } from 'antd';
import DNCR from "../../Images/Cloud.jpeg";

const { Title, Paragraph } = Typography;

const Telecommunication = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Paragraph style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: 'clamp(16px, 2vw, 20px)', fontFamily: 'Times New Roman, serif' }}>
            Enhance communication and collaboration with cloud-based telecom solutions that provide flexibility, scalability, and cost-efficiency. Our cloud-based telecom services include VoIP, virtual PBX, and unified communications to streamline business operations and improve customer service.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={DNCR}
            alt="DNCR Compliance"
            style={{
              width: '90%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: '300px',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Telecommunication;
