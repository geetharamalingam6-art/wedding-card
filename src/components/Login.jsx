import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Login.css';

const Login = ({ onViewChange }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRepassword, setSignupRepassword] = useState('');

  return (
    <div className="login-page">
      <Navbar onViewChange={onViewChange} />

      <main className="login-main-container">
        {/* Top Tabs: Login / Sign Up */}
        <div className="auth-tabs-header">
          <button 
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`auth-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container with smooth transition */}
        <div className="auth-form-wrapper">
          {activeTab === 'login' ? (
            <div className="auth-form-pane login-pane">
              <h2 className="auth-form-title">Login to my Account</h2>
              <form onSubmit={(e) => e.preventDefault()} className="auth-form">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="auth-submit-btn">Login & Continue</button>

                <div className="auth-extra-link">
                  <a href="#forgot" onClick={(e) => e.preventDefault()}>Forgot Password</a>
                </div>
              </form>
            </div>
          ) : (
            <div className="auth-form-pane signup-pane">
              <h2 className="auth-form-title">New User? Sign Up Now</h2>
              <form onSubmit={(e) => e.preventDefault()} className="auth-form">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Re-password</label>
                  <input 
                    type="password" 
                    placeholder="Re-enter Password" 
                    value={signupRepassword}
                    onChange={(e) => setSignupRepassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="auth-submit-btn">Sign Up & Continue</button>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Login;
