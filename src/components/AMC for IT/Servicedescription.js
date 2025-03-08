import React from 'react';
import { Typography, Row, Col } from 'antd';
import DNCR from "../../Images/AMC.jpeg";

const { Title, Text } = Typography;

const AMC = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
          Ensure uninterrupted IT operations with our Annual Maintenance Contracts (AMC). We offer proactive maintenance, regular system health checks, and on-demand support to keep your IT infrastructure running smoothly.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={DNCR}
            alt="AMC"
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

export default AMC;
