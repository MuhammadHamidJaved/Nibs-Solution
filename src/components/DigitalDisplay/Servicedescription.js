import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const DigitalDisplayIntegration = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            Our seamless digital display integration services are designed to elevate your brand visibility and enhance customer experiences. Whether for advertising or interactive information sharing, we provide solutions that captivate your audience.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://img.freepik.com/premium-photo/digital-harmony-seamless-integration-across-devices_1312917-20016.jpg"
            alt="Digital Display"
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

export default DigitalDisplayIntegration;
