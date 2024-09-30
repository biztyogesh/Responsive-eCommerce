// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { ReactComponent as Frame } from "./assets/Frame.svg";
import { ReactComponent as Men } from "./assets/Men.svg";
import { ReactComponent as Search } from "./assets/Search.svg";
import { ReactComponent as Heart } from "./assets/Heart.svg";
import { ReactComponent as Shopping } from "./assets/Shopping.svg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <header>
        <nav className="navbar">
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
          <div className="icons">
            <Men />
            <Search />
            <Heart />
            <Shopping />
          </div>
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
