import React from 'react';
import { Row, Col, Typography } from 'antd';
import services from './data/services';

const { Paragraph } = Typography;

const WhyChooseUs = () => {
  return (
    <div style={{ padding: '30px 70px', background: '#f0f2f5' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <img
            src="https://media.istockphoto.com/id/969985354/photo/why-choose-us-chalkboard-on-a-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=vK66tJDVSlN6jurRr-R8PqB10XIltEcw_lsOHiVPUoo="
            alt="Consultation "
            style={{
              width: '90%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: '350px', 
            }}
          />
        </Col>
        <Col xs={24} md={12} style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Paragraph style={{ fontSize: '20px', color: '#000',fontFamily: 'Times New Roman, serif' }}>
            Choose us to empower your business with cutting-edge solutions that combine innovation, security, and efficiency. From harnessing AI and automation to streamline operations and deliver custom-tailored models, to ensuring robust cybersecurity frameworks that protect your sensitive data, we are committed to excellence.Our expertise spans following areas:
            </Paragraph>
            <ul style={{ paddingLeft: '20px', listStyleType: 'none',fontFamily: 'Times New Roman, serif' }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px', fontSize: '18px', color: '#003399',fontFamily: 'Times New Roman, serif' }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#003399',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }} />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseUs;



