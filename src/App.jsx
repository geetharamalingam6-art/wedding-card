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
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  let view;

  if (currentView === 'wedding') {
    view = <Wedding onNavigateHome={() => setCurrentView('home')} />;
  } else if (currentView === 'hindu') {
    view = <Hindu onViewChange={setCurrentView} />;
  } else if (currentView === 'search') {
    view = <Search onViewChange={setCurrentView} />;
  } else if (currentView === 'login') {
    view = <Login onViewChange={setCurrentView} />;
  } else if (currentView === 'wishlist') {
    view = <Wishlist onViewChange={setCurrentView} />;
  } else if (currentView === 'cart') {
    view = <Cart onViewChange={setCurrentView} />;
  } else if (currentView === 'buy') {
    view = <Buy onViewChange={setCurrentView} />;
  } else if (currentView === 'pay') {
    view = <Pay onViewChange={setCurrentView} />;
  } else if (currentView === 'about') {
    view = <About onViewChange={setCurrentView} />;
  } else if (currentView === 'contact') {
    view = <Contact onViewChange={setCurrentView} />;
  } else if (currentView === 'faq') {
    view = <Faq onViewChange={setCurrentView} />;
  } else if (currentView === 'order') {
    view = <Order onViewChange={setCurrentView} />;
  } else {
    view = (
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

  // The provider wraps EVERY view so the cart is shared across pages
  // (home -> cart -> buy). Wrapping only the home view made useCart()
  // throw on the cart page, which unmounted the whole React tree.
  return <CartProvider>{view}</CartProvider>;
}

export default App;
