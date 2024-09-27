import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { ReactComponent as Frame } from "./assets/Frame.svg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <header>
        <nav className="navbar">
          {/* <Link to="/" className="logo">Furniro</Link> */}
          <Frame />
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
