import React from "react";
import Outsource from "../../pages/websitedevpages/Outsource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SoftwareAudit from "../../pages/websitedevpages/SoftwareAudit";
import ServiceSection from "../../pages/websitedevpages/ServiceSection";
import DevelopmentService from "../../pages/websitedevpages/DevelopmentService";
import CTA from "../../pages/websitedevpages/CTA";
import SoftwareDevelopment from "../../pages/websitedevpages/SoftwareDevelopment";
import EndToEnd from "../../pages/websitedevpages/EndToEnd";
import CTA2 from "../../pages/websitedevpages/CTA2";
import OurSuccess from "../../pages/websitedevpages/OurSuccess";
import DevProcess from "../../pages/websitedevpages/DevProcess";
import Industries from "../../pages/websitedevpages/Industries";
import ServiceAndTech from "../../pages/websitedevpages/ServiceAndTech";
import OurCollaboration from "../../pages/websitedevpages/OurCollaboration";
import FAQ from "../../pages/websitedevpages/FAQ";
import ContactForm from '../../components/common/ContactForm';
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';


const WebsiteDev = () =>{
    return(
        <div>
            <Outsource/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <SoftwareAudit/>
            <ServiceSection/>
            <DevelopmentService/>
            <CTA/>
            <SoftwareDevelopment/>
            <EndToEnd/>
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

export default WebsiteDev;