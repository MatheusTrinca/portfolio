import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimonials/Testimonial';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ToastContainer />
    </>
  );
};

export default App;

// 2:45:40
