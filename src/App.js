import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
// import Contact from "./pages/Contact";
import './styles.css';

function App() {
  return (
    <div className="app">
      <Router basename="/newport-sensors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
