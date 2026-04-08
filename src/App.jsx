import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ServiceIcons from './sections/ServiceIcons';
import Recommendation from './sections/Recommendation';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import News from './sections/News';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceIcons />
        <Recommendation />
        <WhyChooseUs />
        <Testimonials />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
