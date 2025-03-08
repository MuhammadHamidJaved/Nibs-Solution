import React from 'react';
import { Row, Col } from 'antd';
import HeaderSection from '../components/About/Title';
import ContentSection from '../components/About/ContentSection';
import WhyChooseUs from '../components/About/WhyChooseUs';
import CoreValues from '../components/About/CoreValues';

const MoreInfo = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <HeaderSection />
      </Col>
      <Col span={24}>
        <ContentSection />
      </Col>
      <div style={{ padding:"50px" }}>
        <Col span={24}>
          <CoreValues />
        </Col>
      
      <Col span={24}>
        <WhyChooseUs />
      </Col>
      </div>
      
    </Row>
  </div>
  );
};

export default MoreInfo;