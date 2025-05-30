import React from "react";
import OurSource from "../../components/technologies/php/OurSource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import PhpDevService from "../../components/technologies/php/PhpDevService";
import SoftwareAuditBanner from '../../components/common/SoftwareAuditBanner';
import ServiceSection from "../../components/technologies/php/ServiceSection";
import CTA from "../../components/technologies/php/CTA";
import ExpertiseSection from "../../components/technologies/php/ExpertiseSection";
import DeveloperSection from "../../components/technologies/php/DeveloperSection";
import CTA2 from "../../components/technologies/php/CTA2";
import OurSuccess from "../../components/technologies/NodeJs/OurSuccess";
import HiringProcess from "../../components/technologies/php/HiringProcess";
import PhpTech from "../../components/technologies/php/PhpTech";
import Industries from "../../components/technologies/NodeJs/Industries";
import ServiceTech from "../../components/technologies/NodeJs/ServiceTech";
import OurCollaboration from "../../components/technologies/NodeJs/OurCollaboration";
import FAQ from "../../components/technologies/php/FAQ";
import ContactForm from '../../components/common/ContactForm';

const PhpPage = ()=>{
    return (
        <div>
            <OurSource/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <PhpDevService/>
            <SoftwareAuditBanner/>
            <ServiceSection/>
            <CTA/>
            <ExpertiseSection/>
            <DeveloperSection/>
            <CTA2/>
            <OurSuccess/>
           <HiringProcess/>
           <PhpTech/>
           <Industries/>
           <ServiceTech/>
           <OurCollaboration/>
           <FAQ/>
           <ContactForm/>
        </div>
    )
}

export default PhpPage