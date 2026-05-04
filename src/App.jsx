import React, { useEffect } from 'react';
import Hero from './components/Hero';
import WhySourdough from './components/WhySourdough';
import SupermarketProblem from './components/SupermarketProblem';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import GuaranteeCTA from './components/GuaranteeCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <WhySourdough />
      <SupermarketProblem />
      <Delivery />
      <Testimonials />
      <GuaranteeCTA />
      <Footer />
    </main>
  );
}

export default App;
