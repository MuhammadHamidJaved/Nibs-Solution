import React from 'react';
import { Typography, Row, Col } from 'antd';
import CCTV from "../../Images/CCTV.jpeg"

const { Title, Text } = Typography;

const SecuritySystems = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            Our CCTV and facial recognition systems are designed to provide comprehensive surveillance, seamless access control, and intelligent monitoring capabilities to enhance your business's security operations.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={CCTV}
            alt="CCTV and Facial Recognition"
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

export default SecuritySystems;
