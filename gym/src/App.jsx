import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import Hero from "./components/sections/Hero";
import Cursor from "./components/sections/Cursor";
import Footer from "./components/Layouts/Footer";
import Gallery from "./components/sections/Galary";
import Basic from "./pages/Basic";
import Standard from "./pages/Standard";
import Premium from "./pages/Premium";
import FreeTrial from "./components/sections/FreeTrial";
import Services from "./components/sections/Service";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
