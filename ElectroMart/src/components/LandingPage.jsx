import React from 'react';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="login-bg">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <span className="navbar-title">WPT</span>
        </div>
        <div className="navbar-center">
          <span className="navbar-link">DASHBOARD</span>
          <span className="navbar-link">CONFIGURATIONS</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-icon">☀️</span>
          <span className="navbar-login">LOGIN</span>
        </div>
      </nav>
      {/* Overlay */}
      <div className="login-overlay"></div>
      {/* Login Modal */}
      <div className="login-modal">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <div className="login-btn-row">
            <button type="submit" className="login-btn">LOGIN</button>
            <button type="button" className="guest-btn">GUEST MODE</button>
          </div>
        </form>
        <button className="google-btn">
          <img src="https://warehouse-planning-tool.onrender.com/static/media/google.9a7800d06783d80a1c12249a8ca58e9d.svg" alt="Google" className="google-icon" />
          Sign In with Google account
        </button>
        <div className="signup-row">
          <span>Don't have an account?</span>
          <span className="signup-link">SIGN UP</span>
        </div>
      </div>
      <footer className="login-footer">
        <div className="footer-content">
          <span>© WebDevApplications@gmail.com 2023</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
