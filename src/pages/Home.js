import React from "react";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
import Contactus from "../components/ContactUs"
import Services from "./Services";
import ContactButton from "../components/ContactButton";
import WhoWeAre from "../components/WhoWeAre";
import HomeTop from "../components/HomeTop";

const App = () => {
  return (
    <>
      <HomeTop />
      <div style={{ padding: '40px' }}>
         <WhatSetsUsApart />  
      </div>
      <Services />
      <div>    
        <div
          style={{
            minHeight: "100vh",
            padding: "40px",
            background: "#ffffff",
          }}
        >
          <WhoWeAre />  
          <ContactButton />
          <Contactus />
        </div>
      </div>
    </>
  );
};

export default App;
