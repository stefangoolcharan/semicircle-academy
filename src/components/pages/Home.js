import React from 'react'
import '../../style.css'
import Hero from '../hero'
import AboutSection from '../about'
import ClassSection from '../classes';
import Resources from '../resources';
import Testimonial from '../testimonials';
import Location from '../location';
import Footer from '../footer';


function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ClassSection />
            <Resources />
            <Testimonial />
            <Location />
        </>
    );
}

export default Home;