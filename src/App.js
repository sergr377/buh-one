import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import FirstScreen from './components/FirstScreen/FirstScreen';
import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import OurClients from './components/OurClients/OurClients';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstScreen />
      <OurServices />
      <AboutUs />
      <OurClients />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
