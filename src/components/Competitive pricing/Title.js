import React from 'react';
import { Typography, Row, Col, Button } from 'antd';

const { Title, Text } = Typography;

const HeaderSection = () => {
  return (
    <div style={{ background: '#003399', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={12}>
          <Title level={1} style={{ color: '#fff', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Competitive Pricing & Services with Support
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', color: '#fff', fontSize: '22px', fontFamily: 'Times New Roman, serif' }}>
            Cost-effective IT solutions tailored to your business needs, offering high-quality services with transparent pricing and dedicated customer support.
          </Text>
          <Button type="primary" size="large" style={{ backgroundColor: '#000', borderColor: '#003399', marginTop: '0px', fontFamily: 'Times New Roman, serif' }}>
            Free Consultation Today
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSection;
