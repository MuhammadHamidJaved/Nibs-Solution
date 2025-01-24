import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Card
        hoverable
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
        cover={
          image ? (
            <img
              alt={name}
              src={image}
              style={{
                borderRadius: "8px 8px 0 0",
                height: "300px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px 8px 0 0",
              }}
            >
              <UserOutlined style={{ fontSize: "64px", color: "#003399" }} />
            </div>
          )
        }
      >
        <h3 style={{ color: "#003399", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
          {name}
        </h3>
        <p style={{ color: "#555", fontSize: "16px", marginBottom: "10px" }}>
          {role}
        </p>
        <p style={{ color: "#777", fontSize: "14px", lineHeight: "1.6" }}>
          {description}
        </p>
      </Card>
    </div>
  );
};

export default TeamMember;
