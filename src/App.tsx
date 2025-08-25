import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

// import LoginForm from "./components/Forms/LoginForm";
// import SignupForm from "./components/Forms/SignupForm";
// import ProtectedRoute from "./components/ProtectedRoute";

import { ReactComponent as Frame } from "./assets/Frame.svg";
import { ReactComponent as Men } from "./assets/Men.svg";
import { ReactComponent as Search } from "./assets/Search.svg";
import { ReactComponent as Heart } from "./assets/Heart.svg";
import { ReactComponent as Shopping } from "./assets/Shopping.svg";

import "./App.css";
import LoginForm from "./Components/Forms/LoginForm";
import SignupForm from "./Components/Forms/SignupForm";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      {/* Navbar sirf login ke baad show hoga */}
      {isLoggedIn && (
        <header>
          <nav className="navbar">
            <Frame />
            <ul className="nav-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="icons">
              <Men />
              <Search />
              <Heart />
              <Shopping />
            </div>
          </nav>
        </header>
      )}

      <Routes>
        {/* Default route → login page */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        {/* Auth Routes */}
        <Route
          path="/auth/login"
          element={<LoginForm onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/auth/signup"
          element={<SignupForm onSignup={() => setIsLoggedIn(true)} />}
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
