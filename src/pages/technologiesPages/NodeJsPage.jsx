import React from "react";
import HirePage from "../../components/technologies/NodeJs/HirePage";
import ClientLogosSection from "../../components/common/ClientLogosSection";
import TestimonialsSection from "../../components/common/TestimonialsSection";
import SoftwareAuditBanner from "../../components/common/SoftwareAuditBanner";
import ServiceSection from "../../components/technologies/NodeJs/ServiceSection";
import ProjectOutSource from "../../components/technologies/NodeJs/ProjectOutSource";
import ExpertDev from "../../components/technologies/NodeJs/ExpertDev";
import NodeJsSkills from "../../components/technologies/NodeJs/NodeJsSkills";
import NodeDevelopers from "../../components/technologies/NodeJs/NodeDevelopers";
import CVS from "../../components/technologies/NodeJs/CVS";
import OurSuccess from "../../components/technologies/NodeJs/OurSuccess";
import HireNodeDev from "../../components/technologies/NodeJs/HireNodeDev";
import OurTech from "../../components/technologies/NodeJs/OurTech";
import Industries from "../../components/technologies/NodeJs/Industries";
import ServiceTech from "../../components/technologies/NodeJs/ServiceTech";
import OurCollaboration from "../../components/technologies/NodeJs/OurCollaboration";
import NodeFAQ from "../../components/technologies/NodeJs/NodeFAQ";
import ContactForm from "../../components/common/ContactForm";
import NodeBlog from "../../components/technologies/NodeJs/NodeBlog";

const NodeJsPage = () =>{
    return (
        <div >
            <HirePage/>
            <ClientLogosSection/>
            <TestimonialsSection/>
            <SoftwareAuditBanner/>
            <ServiceSection/>
            <ProjectOutSource/>
            <ExpertDev/>
           <NodeJsSkills/>
           <NodeDevelopers/>
           <CVS/>
           <OurSuccess/>
           <HireNodeDev/>
           <OurTech/>
           <Industries/>
           <ServiceTech/>
           <OurCollaboration/>
           <NodeFAQ/>
           <ContactForm/>
           <NodeBlog/>
        </div>
    )
}

export default NodeJsPage