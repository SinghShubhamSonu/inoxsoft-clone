import React from "react";
import Outsource from "../../pages/seoanddigital/Outsource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import ClientTestimonial from '../../pages/productdevpages/ClientTestimonial';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SoftwareAuditBanner from '../../components/common/SoftwareAuditBanner';
import ServiceSection from "../../pages/seoanddigital/ServiceSection";
import DevelopmentService from "../../pages/seoanddigital/DevelopmentService";
import CTA from '../../pages/productdevpages/CTA';
import SoftwareDevelopment from "../../pages/seoanddigital/SoftwareDevelopment";
import Flip from "../../pages/seoanddigital/Flip";
import CTA2 from '../../pages/productdevpages/CTA2';
import OurSuccess from "../../pages/seoanddigital/OurSuccess";
import DevProcess from "../../pages/seoanddigital/DevProcess";
import Industries from '../../pages/productdevpages/Industries';
import ServiceAndTech from '../../pages/productdevpages/ServiceAndTech';
import OurCollaboration from '../../pages/productdevpages/OurCollaboration';
import FAQ from "../../pages/seoanddigital/FAQ";
import ContactForm from '../../components/common/ContactForm';
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';

const SeoAndDigitalMarketing = () =>{
    return(
        <div>
            <Outsource/>
            <ClientLogosSection/>
            <ClientTestimonial/>
            <TestimonialsSection/>
            <SoftwareAuditBanner/>
            <ServiceSection/>
            <DevelopmentService/>
            <CTA/>
            <SoftwareDevelopment/>
            <Flip/>
            <CTA2/>
            <OurSuccess/>
            <DevProcess/>
            <Industries/>
            <ServiceAndTech/>
            <OurCollaboration/>
            <FAQ/>
            <ContactForm/>
            <BlogPostsCarousel/>
        </div>
    )
}

export default SeoAndDigitalMarketing;