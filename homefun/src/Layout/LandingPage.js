
import React, { Component, Suspense } from 'react'
import AboutSection from './AboutSection'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import WhyUsSection from './WhyUsSection'
import ClientsSection from './ClientsSection'
import ServicesSection from './ServicesSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import '../assets/css/style.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/icofont/icofont.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/venobox/venobox.css'
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import '../assets/vendor/aos/aos.css'


import {
    Route, Switch, Redirect
} from 'react-router-dom';

export class LandingPage extends Component {
    render() {
        return (
            <>
                <Header />
                <main className='wrap'>
                    <HeroSection />
                    <WhyUsSection />
                    <AboutSection />
                    <ClientsSection />
                    <ServicesSection />
                    <FAQSection />
                    <ContactSection />
                </main>
                <Footer />
            </>

        )
    }
}

export default LandingPage