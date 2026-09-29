import React from 'react';
import jamesImg from '../assets/james.jpg';
import harshithaImg from '../assets/harshitha.avif';
import santhoshImg from '../assets/santhosh.webp';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James',
      title: 'Absolutely beautiful invites!',
      text: 'We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!',
      image: jamesImg,
    },
    {
      id: 2,
      name: 'Harshitha',
      title: 'Customized to perfection',
      text: 'We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined. Fast turnaround too!',
      image: harshithaImg,
    },
    {
      id: 3,
      name: 'Santhosh',
      title: 'Great quality at a great price.',
      text: 'We were on a tight budget, but didn’t want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully',
      image: santhoshImg,
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">WHAT CLIENT SAY ABOUT US</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="client-avatar">
              <img src={item.image} alt={item.name} />
            </div>
            <h3 className="client-name">{item.name}</h3>
            <h4 className="testimonial-title">{item.title}</h4>
            <p className="testimonial-text">{item.text}</p>
            <div className="star-rating">
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
