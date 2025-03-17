// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import SupportUs from "./screens/SupportUs";
import News from "./screens/News";
import Contact from "./screens/Contact";
import Navbar from "./molecules/Navbar";
import Footer from "./molecules/Footer";
import OurEvents from "./screens/OurEvents";
import NewsDetail from "./screens/NewsDetail";

function App() {

  return (
    <Router>
      {/* Navbar ko bhi ThemeContext ka access milega */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/supportus" element={<SupportUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<OurEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsdetail" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
