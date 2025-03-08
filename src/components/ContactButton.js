// src/ContactButton.js
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './css/ContactButton.css'; // Import the CSS file
// import { render } from '@react-email/components';
// import nodemailer from 'nodemailer';
// import { Email } from './Email';



const ContactButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.forwardemail.net',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: 'hamidrana1975@gmail.com',
  //     pass: 'nxnf dvly mmxh rcbj',
  //   },
  // });
  

  // const sendEmail = async (values) => {
  //   const { name, email, message } = values;
  
  //   const emailHtml = render(<Email sender={name} message={message} url="https://example.com" />);
  
  //   const info = await transporter.sendMail({
  //     from: 'hamidrana1975@gmail.com',
  //     to: 'hamidrana1975@gmail.com',
  //     subject: 'New Message from Website',
  //     html: emailHtml,
  //   });
  
  //   return info;
  // };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    
    setIsModalVisible(false);

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const handleSubmit = async (values) => {
  //   try {
  //     const info = await sendEmail(values);
  //     console.log('Email Info:', info);
  //     handleOk();
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<MailOutlined />}
        size="large"
        className="contact-button"
        onClick={showModal}
      />
      <Modal
        title="Contact Us"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log('Form Values:', values);
            // handleSubmit(values);
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ContactButton;
