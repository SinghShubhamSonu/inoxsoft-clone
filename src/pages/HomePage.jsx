import React from 'react';
// import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
import HeroSection from '../components/homepage/HeroSection';
import OtherSection from '../components/homepage/ServiceOptions';
import ClientLogosSection from '../components/common/ClientLogosSection';
import TestimonialsSection from '../components/common/TestimonialsSection';
import ServicesAndTechSection from '../components/common/ServicesAndTechSection';
import IndustriesSection from '../components/homepage/IndustriesSection';
import CaseStudiesSection from '../components/homepage/CaseStudiesSection';
import AwardsSection from '../components/homepage/AwardsSection';
import ContactForm from '../components/common/ContactForm';
import SoftwareDevelopmentAccordion from '../components/homepage/SoftwareDevelopmentAccordion';
import FaqSection from '../components/homepage/FaqSection';
import ServiceOptions from '../components/homepage/ServiceOptions';

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      {/* <main className="container mx-auto py-8 px-6"> Added a container to the main content */}
        {/* Homepage content here */}
        {/* <p>Homepage Content Goes Here!</p>
      </main> */}
      {/* <Footer /> */}
      <HeroSection />
      <ServiceOptions/>
      <ClientLogosSection/>
      <TestimonialsSection/>
      <ServicesAndTechSection/>
      <IndustriesSection/>
      <CaseStudiesSection/>
      <AwardsSection/>
      <ContactForm/>
      <SoftwareDevelopmentAccordion/>
      <FaqSection/>
    </div>
  );
}

export default HomePage;
