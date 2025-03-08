import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const DatabaseIntegration = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            Service description
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            In today’s data-driven world, efficient database management is critical to business success. Our comprehensive database management solutions are designed to streamline your data processes, ensure integrity, and enhance scalability for seamless business growth.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://media.istockphoto.com/id/1397390395/photo/system-analyst-or-businessman-drawing-relational-database-tables-concept-of-database-diagram.jpg?s=612x612&w=0&k=20&c=FP1hm7KsHzxw7y_AujZvaVczQH6ddF19GFGGCHbHbaI="
            alt="DBMS"
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

export default DatabaseIntegration;
