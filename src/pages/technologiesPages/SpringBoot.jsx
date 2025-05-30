import React from "react";
import OurSource from "../../components/technologies/springboot/OurSource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SpringDevelopmentService from "../../components/technologies/springboot/SpringDevelopmentService";
import SoftwareAuditBanner from '../../components/common/SoftwareAuditBanner';
import ServiceSection from "../../components/technologies/springboot/ServiceSection";
import CTA from "../../components/technologies/springboot/CTA";
import ExpertiseSection from "../../components/technologies/springboot/ExpertiseSection";
import DeveloperSection from "../../components/technologies/springboot/DeveloperSection";
import CTA2 from "../../components/technologies/springboot/CTA2";
import OurSuccess from "../../components/technologies/NodeJs/OurSuccess";
import HiringProcess from "../../components/technologies/springboot/HiringProcess";
import SpringTech from "../../components/technologies/springboot/SpringTech";
import Industries from "../../components/technologies/NodeJs/Industries";
import ServiceTech from "../../components/technologies/NodeJs/ServiceTech";
import OurCollaboration from "../../components/technologies/NodeJs/OurCollaboration";
import FAQ from "../../components/technologies/springboot/FAQ";
import ContactForm from '../../components/common/ContactForm';


const SpringBoot= ()=>{
    return(
        <div >
            <OurSource/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <SpringDevelopmentService/> 
            <SoftwareAuditBanner/>
            <ServiceSection/>
            <CTA/>
            <ExpertiseSection/>
            <DeveloperSection/>
           <CTA2/>
           <OurSuccess/>
            <HiringProcess/>
            <SpringTech/>
            <Industries/>
            <ServiceTech/>
            <OurCollaboration/>
            <FAQ/>
            <ContactForm/>
      
        </div>
    )
}

export default SpringBoot; 