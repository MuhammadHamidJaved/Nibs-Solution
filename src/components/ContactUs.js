import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";



const NavigateToContact = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact"); // Replace '/contact' with the actual path to your Contact page
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0", padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
      <p style={{ fontSize: "18px", color: "#333", marginBottom: "16px" }}>
      Unlock the potential of your business with our comprehensive solutions. Contact us today to learn how we can support your growth!
      </p>
      <Button
        type="primary"
        size="large"
        onClick={handleNavigation}
        style={{
          background: "#003399", // Primary brand color
          borderColor: "#003399",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          textTransform: "uppercase",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        hover={{
          background: "#001f66", // Darker shade on hover
          borderColor: "#001f66",
        }}
      >
        Contact Us
      </Button>
    </div>
  );
};

export default NavigateToContact;
