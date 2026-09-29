import React from 'react';
import './Faq.css';
import Navbar from './Navbar';
import Footer from './Footer';

const faqs = [
  {
    q: 'How much do Indian wedding invitation cards typically cost?',
    a: 'The cost of Indian wedding cards can vary widely depending on several factors such as design complexity, materials used, customization options, and quantity ordered. Typically, Indian wedding invitations can range from affordable options to more extravagant and luxurious choices.',
    a2: 'For simpler and more budget-friendly options, you can find Indian wedding cards starting from around INR 10 to INR 60 per card. These cards may feature standard designs, basic printing techniques, and standard paper quality.',
  },
  {
    q: 'Do you provide sample card before finalizing the order?',
    a: "We don't practise business by providing sample cards, since all the cards are manufactured against order, once the customer places the order, we go for the manufacturing process. So we don't keep sample cards to carry.",
  },
  {
    q: 'Do you provide printing services?',
    a: 'Yes, we provide the cards with printing. The text can be printed in ink, foil and by using thermographic process.',
  },
  {
    q: 'How much time will it take for the complete procedure for an order?',
    a: 'Once the customer approve the proof and after the confirmation of the payment, we shall start the printing process and deliver the cards in ten working days time. Then the cards can be shipped across in three to four days, which is to be door delivered.',
  },
  {
    q: 'Do you provide add on cards like Rsvp, Thank you cards etc. ?',
    a: 'Yes, we provide full range of save the date. Card, Rsvp card, Thank you card,Place card, Reception card, Sangeet card, Cocktail card, Mehandi card etc.',
  },
  {
    q: 'Do you provide the text samples of addon cards?',
    a: 'Kindly visit the (******) for the text samples link.',
  },
  {
    q: 'Could you suggest me, wordings, symbols, logos for the order?',
    a: 'You can select appropriate text for your card with related logos fonts the link and as specified below.',
  },
  {
    q: 'How to place the order after selecting the card?',
    a: 'You can choose a card from the hosted list and initially register with us for proceeding to the order booking. After registration, you can book the card with the quantity required and other details.',
  },
  {
    q: 'Can I add up extra page / insert in the card?',
    a: 'You can add extra inserts to your card. The charges for the insert and the printing charges will be additional.',
  },
  {
    q: 'How do we pay through online?',
    a: 'After all your selections are finished, you can make use of the view cost option, to view the entire selections of cards with their prices and shipping cost. Then click on the pay icon which will take you to the online payment gateway through which the payment can be done online within minutes. After the confirmation of the payment only we shall start the manufacturing process.',
  },
];

const Faq = ({ onViewChange }) => {
  return (
    <div className="faq-wrapper">
      <Navbar onViewChange={onViewChange} />
      <div className="faq-page">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className="faq-item" key={item.q}>
              <h2 className="faq-question">
                {i + 1}. {item.q}
              </h2>
              <p className="faq-answer">{item.a}</p>
              {item.a2 && <p className="faq-answer">{item.a2}</p>}
            </div>
          ))}
        </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Faq;