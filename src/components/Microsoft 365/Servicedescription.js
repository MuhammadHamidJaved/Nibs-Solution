import React from 'react';
import { Typography, Row, Col } from 'antd';
import DNCR from "../../Images/MS.jpeg";

const { Title, Text } = Typography;

const Microsoft365 = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            Empower your business with seamless collaboration and productivity tools. We provide comprehensive support for Microsoft Office 365 and Google Workspace, ensuring smooth integration, configuration, and ongoing management tailored to your business needs.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={DNCR}
            alt="DNCR Compliance"
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: 'auto',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Microsoft365;
