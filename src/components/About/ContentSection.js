import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContentSection = () => {
  return (
    <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={1} style={{ fontSize: 'clamp(24px, 2vw, 28px)', color: '#003399', fontFamily: 'Times New Roman, serif' }}>
            Empowering Businesses with Cutting-Edge Technology Solutions
          </Title>
          <Paragraph style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontStyle: 'italic', color: '#000', fontFamily: 'Times New Roman, serif' }}>
            We empower businesses to THRIVE by delivering innovative, tailored solutions across technology, security, and automation.
          </Paragraph>
          <Paragraph style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: '#000', fontFamily: 'Times New Roman, serif' }}>
            We specialize in AI, automation, cybersecurity, and telecom. Our services include database management, DNCR compliance, and advanced network infrastructure. We also offer custom software, CCTV & facial recognition, and seamless digital display integration.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Consulting"
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: 'auto',
              maxHeight: '350px',
            }}
          />
        </Col>
      </Row>
      <hr style={{ border: 'none', borderTop: '2px solid #003399', marginTop: '20px', marginBottom: '50px' }} />
    </div>
  );
};

export default ContentSection;
