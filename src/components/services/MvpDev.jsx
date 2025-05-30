import React from "react";
import Outsource from "../../pages/mvpdevpages/Outsource";
import ClientLogosSection from '../../components/common/ClientLogosSection';
import ClientTestimonial from '../../pages/productdevpages/ClientTestimonial';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SolutionsSection from "../../pages/mvpdevpages/SolutionsSection";
import Industries from "../../pages/mvpdevpages/Industries";
import DevProcess from "../../pages/mvpdevpages/DevProcess";

import CTA from "../../pages/mvpdevpages/CTA";
import WhyInox from "../../pages/mvpdevpages/WhyInox";
import OurSuccess from "../../pages/mvpdevpages/OurSucess";
import Flip from "../../pages/mvpdevpages/Flip";
import TechnologiesStack from "../../pages/mvpdevpages/TechnologiesStack";
import OurCollaboration from "../../pages/mvpdevpages/OurCollaboration";
import FAQ from "../../pages/mvpdevpages/FAQ";
import ContactForm from '../../components/common/ContactForm';
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';

const MvpDev =() =>{
    return(
        <div>
            <Outsource/>
            <ClientLogosSection/>
            <ClientTestimonial/>
            <TestimonialsSection/>
            <SolutionsSection/>
            <Industries/>
            <DevProcess/>
           <WhyInox/>
            <CTA/>
            <OurSuccess/>
            <Flip/>
            <TechnologiesStack/>
            <OurCollaboration/>
            <FAQ/>  
            <ContactForm/>
            <BlogPostsCarousel/>
        </div>
    )
}

export default MvpDev;