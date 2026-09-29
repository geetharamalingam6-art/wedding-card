import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import aboutMain from '../assets/card1.png';
import preWedding from '../assets/card2.png';
import indiaInspired from '../assets/palace.png';

const About = ({ onViewChange }) => {
  return (
    <div className="about-wrapper">
      <Navbar onViewChange={onViewChange} />
      <div className="about-page">
      <h1 className="about-title">ABOUT US</h1>

      {/* SECTION 1 */}
      <section className="about-section">
        <div className="about-text">
          <h2 className="about-heading">
            Celebrating Love, One Invitation at a Time
          </h2>
          <p className="about-paragraph">
            At Wed Knot Craft, we believe that every love story is unique and
            deserves to be celebrated in a way that reflects its individuality.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutMain} alt="Wedding invitation card" />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="about-section">
        <div className="about-image">
          <img src={preWedding} alt="Pre wedding invitation card" />
        </div>

        <div className="about-text">
          <h2 className="about-heading">OUR STORY</h2>
          <p className="about-paragraph">
            What started as a passion for design has blossomed into a
            full-fledged business dedicated to bringing couples&apos; visions to
            life. Our founder, [Founder&apos;s Name], envisioned a platform where
            couples could find invitations that resonated with their personal
            style and cultural heritage.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="about-section">
        <div className="about-text">
          <h2 className="about-heading">OUR PROMISE</h2>
          <p className="about-paragraph">We are committed to providing:</p>
          <ul className="about-list">
            <li>
              <strong>Custom Designs:</strong> Tailored invitations that reflect
              your unique love story.
            </li>
            <li>
              <strong>Quality Craftsmanship:</strong> Invitations crafted with
              attention to detail and high-quality materials.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> A seamless experience from
              selection to delivery, ensuring your complete satisfaction.
            </li>
          </ul>
        </div>

        <div className="about-image">
          <img src={indiaInspired} alt="India inspired wedding invitation card" />
        </div>
      </section>

      {/* CLOSING */}
      <div className="about-closing">
        <h2 className="about-closing-title">
          JOIN Us in Celebrating Your Special Day
        </h2>
        <p className="about-closing-text">
          Explore our diverse range of designs and let us help you set the tone
          for your wedding celebration. At [Your Company Name], your love story
          is our inspiration.
        </p>
      </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default About;
