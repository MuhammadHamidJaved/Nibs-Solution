import React from "react";
import "./footer.css";
import { Layout } from "antd";
const { Footer } = Layout;

const footer = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Guaranteed Satisfaction. Everytime!</h3>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/Database-Management">Database Management</a>
            </li>
            <li>
              <a href="/DNCR">DNCR Compliance Services</a>
            </li>
            <li>
              <a href="/CCTVFacialRecognition">CCTV and Facial Recognition Systems</a>
            </li>
            <li>
              <a href="/AdvancedNetworkInfrastructure">Advanced Network Infrastructure</a>
            </li>
            <li>
              <a href="/Display-Integration">Seamless Digital Display Integration</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>+971 55 837 5373</p>
          <p>
            <a href="mailto:admin@analyzinn.com">nabeel@nibs.solutions</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Nibs Solutions</p>
      </div>
    </Footer>
  );
};

export default footer;

