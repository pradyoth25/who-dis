import React from 'react';
import './App.css';

import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Portfolio from './component/Portfolio';
import Resume from './component/Resume';
import Testimonials from './component/Testimonials';

import resumeData from './component/data/ResumeData'
import aboutmeData from './component/data/AboutmeData'

function App() {
  return (
    <div className="App">
      <Header />
      <About aboutmeData = {aboutmeData}/>
        <Resume resumeData = {resumeData} />
        {/* <Portfolio /> */}
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
