import React from 'react';
import { Typography, Row, Col } from 'antd';
import ANI from "../../Images/ANI.jpeg"

const { Title, Text } = Typography;

const NetworkInfrastructure = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '100%', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            We offer advanced telecom and network infrastructure solutions that empower businesses with reliable connectivity, ensuring optimal performance and uninterrupted operations with round-the-clock support.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={ANI}
            alt="Network Infrastructure"
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: 'auto',
              maxHeight: '300px',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default NetworkInfrastructure;
