import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Offer from '../components/Offer';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Offer />
            {/* <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} /> */}
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home
