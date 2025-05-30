import React from "react";
import OurSource from "../../components/technologies/sql/OurSource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SqlService from "../../components/technologies/sql/SqlService";
import SoftwareAuditBanner from "../../components/common/SoftwareAuditBanner";
import ServiceSection from "../../components/technologies/sql/ServiceSection";
import CTA from "../../components/technologies/sql/CTA";
import ExpertiseSection from "../../components/technologies/sql/ExpertiseSection";
import DeveloperSection from "../../components/technologies/sql/DeveloperSection";
import CTA2 from "../../components/technologies/sql/CTA2";
import OurSuccess from "../../components/technologies/NodeJs/OurSuccess";
import HiringProcess from "../../components/technologies/sql/HiringProcess";
import Industries from "../../components/technologies/NodeJs/Industries";
import ServiceTech from "../../components/technologies/NodeJs/ServiceTech";
import OurCollaboration from "../../components/technologies/NodeJs/OurCollaboration";
import FAQ from "../../components/technologies/sql/FAQ";
import ContactForm from '../../components/common/ContactForm';


const Sql =()=>{
    return(
        <div>
            <OurSource/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <SqlService/>
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

export default Sql;