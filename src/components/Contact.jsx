import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = ({ onViewChange }) => {
  return (
    <div className="contact-wrapper">
      <Navbar onViewChange={onViewChange} />
      <div className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-lead">
          We&apos;d love to hear from you! Whether you have a question, need help
          customizing your invites, or just want to chat about your dream
          wedding stationery — we&apos;re here for you.
        </p>

        {/* SUPPORT */}
        <h2 className="contact-block-title">
          <span className="contact-icon" aria-hidden="true">
            {/* headset */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </span>
          Support
        </h2>

        <div className="contact-details">
          <p>India (toll free):</p>
          <p>999-264-9444</p>
          <p>Only Call - No WhatsApp Number</p>
          <p>
            <a href="mailto:sales@wedknotcraftinvitationcards.com">
              sales@wedknotcraftinvitationcards.com
            </a>
          </p>
        </div>

        {/* PROOFING DEPARTMENT */}
        <h2 className="contact-block-title">
          <span className="contact-icon" aria-hidden="true">
            {/* magnifying glass */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          Proofing Department
        </h2>

        <div className="contact-details">
          <p>Indian Standard Time (IST)</p>
          <p>Mobile (9.00am to 9.00pm IST) Monday to Saturday</p>
          <p>HR Team</p>
          <p>+91 9876543210</p>
          <p>
            <a href="mailto:hrteam@wedknotcraftinvitationcards.com">
              hrteam@wedknotcraftinvitationcards.com
            </a>
          </p>
          <p className="contact-strong">Customer Support Team</p>
          <p>+91 9876543210</p>
          <p>
            <a href="mailto:customersupport@wedknotcraftinvitationcards.com">
              customersupport@wedknotcraftinvitationcards.com
            </a>
          </p>
        </div>

        {/* CONTACT US */}
        <h2 className="contact-section-title">Contact Us</h2>

        <p className="contact-text">
          Whether you&apos;re looking for inquires, would like to ask before
          ordering, or just want to let us know how we did.
        </p>

        <h3 className="contact-subtitle">
          An online Invitation Store with Worldwide Delivery
        </h3>

        <p className="contact-text">
          Weddings are always special but the fact about Wedknotcraft wedding
          Cards is that they are bespoke and exquisite in design that wins the
          hearts of millions across the world.
        </p>

        <p className="contact-text">
          The team behind us is extremely talented and has more than 50 years of
          experience with them to translate your dream wedding card into
          reality.
        </p>

        <p className="contact-text">
          If you want your wedding card to be truly rare and exceptional then
          look no further. The team here is fully able to weave dreams into
          reality.
        </p>

        <p className="contact-text">
          No matter what kind of wedding you have planned,{' '}
          <a
            className="contact-link"
            href="https://wedknotcraft.in"
            target="_blank"
            rel="noreferrer"
          >
            wedknotcraft.in
          </a>{' '}
          is well known to design various wedding invitations like Hindu Wedding
          Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interface Wedding
          Cards and so on.
        </p>

        <p className="contact-closing">
          If you have any query related to invitation designs or our cards,
          please feel free to contact us!!!
        </p>
      </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Contact;