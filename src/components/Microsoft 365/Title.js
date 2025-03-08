import React from 'react';
import { Typography, Row, Col, Button } from 'antd';

const { Title, Text } = Typography;

const HeaderSection = () => {
  return (
    <div style={{ background: '#003399', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={1} style={{ color: '#fff', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Microsoft Office 365 / Google Workspace Support
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', color: '#fff', fontSize: '22px', fontFamily: 'Times New Roman, serif' }}>
            Seamless cloud-based collaboration and productivity solutions to enhance business efficiency, ensuring smooth integration, security, and ongoing technical support.
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
