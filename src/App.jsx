import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./Utilities/Context.jsx";
import HomePage from "./Customer/HomePage.jsx";
import ThankYou from "./Customer/Components/ThankYou.jsx";
import DigitalMarketing from "./Customer/Services/DigitalMarketing.jsx";
import WebDevelopment from "./Customer/Services/WebDevelopment.jsx";
import MobileAppDevelopment from "./Customer/Services/MobileAppDevelopment.jsx";
import ContactUs from "./Customer/ContactUs.jsx";
import AboutUs from "./Customer/AboutUs.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
