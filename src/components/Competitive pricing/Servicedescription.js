import React from 'react';
import { Typography, Row, Col } from 'antd';
import DNCR from "../../Images/CP.png";

const { Title, Text } = Typography;

const Pricing = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            We deliver cost-effective IT solutions without compromising on quality. Our transparent pricing and dedicated support services ensure you get the best value for your investment. Our team of experts is always available to assist you with any queries or concerns you may have. Contact us today to learn more about our competitive pricing and how we can help your business grow.
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
              maxHeight: '300px',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
