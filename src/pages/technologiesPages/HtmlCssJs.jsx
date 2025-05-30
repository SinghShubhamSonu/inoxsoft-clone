import React from "react";
import OurSource from "../../components/technologies/htmlcssjs/OurSource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import Service from "../../components/technologies/htmlcssjs/Service";
import SoftwareAuditBanner from "../../components/common/SoftwareAuditBanner";
import ServiceSection from "../../components/technologies/htmlcssjs/ServiceSection";
import CTA from "../../components/technologies/htmlcssjs/CTA";
import ExpertiseSection from "../../components/technologies/htmlcssjs/ExpertiseSection";
import DeveloperSection from "../../components/technologies/htmlcssjs/DeveloperSection";
import CTA2 from "../../components/technologies/htmlcssjs/CTA2";
import OurSuccess from "../../components/technologies/NodeJs/OurSuccess";
import HiringProcess from "../../components/technologies/htmlcssjs/HiringProcess";
import Industries from "../../components/technologies/NodeJs/Industries";
import ServiceTech from "../../components/technologies/NodeJs/ServiceTech";
import OurCollaboration from "../../components/technologies/NodeJs/OurCollaboration";
import FAQ from "../../components/technologies/htmlcssjs/FAQ";
import ContactForm from '../../components/common/ContactForm';

const HtmlCssJs = () =>{
    return(
        <div>
            <OurSource/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <Service/>
            <SoftwareAuditBanner/>
            <ServiceSection/>
            <CTA/>
            <ExpertiseSection/>
            <DeveloperSection/>
            <CTA2/>
            <OurSuccess/>
            <HiringProcess/>
            <Industries/>
            <ServiceTech/>
            <OurCollaboration/>
            <FAQ/>
            <ContactForm/>
        </div>
    )
}

export default HtmlCssJs