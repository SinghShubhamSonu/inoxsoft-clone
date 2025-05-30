import React from "react";
import Outsource from "../../pages/uiux/Outsource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import ClientTestimonial from '../../pages/productdevpages/ClientTestimonial';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import CTA from "../../pages/uiux/CTA";
import ServicesSection from "../../pages/uiux/ServicesSection";
import Service from "../../pages/uiux/Service";
import DevProcess from "../../pages/uiux/DevProcess";
import Industries from '../../pages/productdevpages/Industries';
import SoftwareAudit from "../../pages/uiux/SoftwareAudit";
import EndToEnd from "../../pages/uiux/EndToEnd";
import CTA2 from "../../pages/uiux/CTA2";
import OurSuccess from "../../pages/uiux/OurSuccess";
import ServiceAndTech from "../../pages/uiux/ServiceAndTech";
import OurCollaboration from '../../pages/productdevpages/OurCollaboration';
import FAQ from "../../pages/uiux/FAQ";
import ContactForm from '../../components/common/ContactForm';
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';

const UiUxDev = ()=>{
    return(
        <div>
            <Outsource/>
            <ClientLogosSection/>
            <ClientTestimonial/>
            <TestimonialsSection/>
            <CTA/>
            <ServicesSection/>
            <Service/>
            <DevProcess/>
            <Industries/>
            <SoftwareAudit/>
            <EndToEnd/>
            <CTA2/>
            <OurSuccess/>
            <ServiceAndTech/>
            <OurCollaboration/>
            <FAQ/>
            <ContactForm/>
            <BlogPostsCarousel/>
        </div>
    )
}

export default UiUxDev;