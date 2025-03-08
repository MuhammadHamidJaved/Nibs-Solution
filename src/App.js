import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Header';
import Footer from './components/footer/footer';
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/contact/contact"
import Database from "./pages/Database"
import DigitalDisplay from "./pages/DigitalDisplay"
import DNCR from './pages/DNCRCompliance';
import TelecomNetwork from './pages/TelecomNetworkInfrastructure';
import CCTVFacial from './pages/CCTVFacialRecognition';
import Microsoft365 from './pages/Microsoft365';
import AMC from './pages/AMC';
import Cloud from './pages/Cloud';
import ITDevices from './pages/ITDevices';
import Pricing from './pages/Pricing';
import CostEffective from './pages/CostEffective'
import ISP from './pages/ISPSupport'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Database-Management" element = {<Database />} />
        <Route path="/Display-Integration" element = {<DigitalDisplay />} />
        <Route path="/CCTVFacialRecognition" element={<CCTVFacial />} />
        <Route path="/AdvancedNetworkInfrastructure" element = {<TelecomNetwork />} />
        <Route path="/DNCR" element={<DNCR />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/Microsoft-GoogleSupport" element={<Microsoft365 />} />
        <Route path="/AMC" element={<AMC />} />
        <Route path="/cloud-based-telecommunication" element={<Cloud />} />
        <Route path="/IT-devices" element={<ITDevices />} />
        <Route path="/Competitive-Pricing" element={<Pricing />} />
        <Route path="/Cost-Effective-Printing" element={<CostEffective />} />
        <Route path="/ISP" element={<ISP />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
