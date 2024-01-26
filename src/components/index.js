import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutSection from './components/about';
import ClassSection from './components/classes';
import Resources from './components/resources';
import Testimonial from './components/testimonials';
import Location from './components/location';
import Footer from './components/footer';

import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Index() {
    return (
    <Router> 
        <main> 
          <Navbar/>
          <Hero />
          <AboutSection />
          <ClassSection />
          <Resources />
          <Testimonial />
          <Location />
          <Footer />
            </main>
            
    </Router>
  )
}

export default Index;