import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import InvitationCards from './components/InvitationCards';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Wedding from './components/Wedding';
import Hindu from './components/Hindu';
import Search from './components/Search';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Buy from './components/buy';
import Pay from './components/pay';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Order from './components/Order';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'wedding') {
    return <Wedding onNavigateHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'hindu') {
    return <Hindu onViewChange={setCurrentView} />;
  }

  if (currentView === 'search') {
    return <Search onViewChange={setCurrentView} />;
  }

  if (currentView === 'login') {
    return <Login onViewChange={setCurrentView} />;
  }

  if (currentView === 'wishlist') {
    return <Wishlist onViewChange={setCurrentView} />;
  }

  if (currentView === 'cart') {
    return <Cart onViewChange={setCurrentView} />;
  }

  if (currentView === 'buy') {
    return <Buy onViewChange={setCurrentView} />;
  }

  if (currentView === 'pay') {
    return <Pay onViewChange={setCurrentView} />;
  }

  if (currentView === 'about') {
    return <About onViewChange={setCurrentView} />;
  }

  if (currentView === 'contact') {
    return <Contact onViewChange={setCurrentView} />;
  }

  if (currentView === 'faq') {
    return <Faq onViewChange={setCurrentView} />;
  }

  if (currentView === 'order') {
    return <Order onViewChange={setCurrentView} />;
  }

  return (
    <div className="App">
      <Navbar onViewChange={setCurrentView} />
      <Hero onViewChange={setCurrentView} />
      <FeaturedCarousel />
      <InvitationCards />
      <Testimonials />
      <HowItWorks />
      <Footer onViewChange={setCurrentView} />
    </div>
  );
}

export default App;
