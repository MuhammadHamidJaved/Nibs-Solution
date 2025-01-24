import React from 'react';
import { Row, Col } from 'antd';
import HeaderSection from '../components/About/Title';
import ContentSection from '../components/About/ContentSection';
import WhyChooseUs from '../components/About/WhyChooseUs';
import CoreValues from '../components/About/CoreValues';
import TeamMember from '../components/About/team';
import image from '../Images/Nabeel.jpeg';

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
      <div style={{ padding:'0px 400px 0px 400px', display:'center' }}>
        <Col>
          <TeamMember
            name="Muhammad Nabeel"
            role="Director Of IT Operations"
            description="Nabeel is a visionary leader with over 15 years of experience in the tech industry. His dedication to innovation has transformed businesses worldwide."
            image={image} 
          />
       </Col>
    </div>
    </Row>
  </div>
  );
};

export default MoreInfo;
