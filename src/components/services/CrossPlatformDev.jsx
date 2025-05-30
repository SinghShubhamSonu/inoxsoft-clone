import React from "react";
import Outsource from "../../pages/crossplatform/Outsource"
import CrossPlatformSection from "../../pages/crossplatform/CrossPlatformSection";
import SoftwareAuditBanner from "../../pages/crossplatform/SoftwareAuditBanner";
import DevSection from "../../pages/crossplatform/DevSection";
import CrossPlatformSection2 from "../../pages/crossplatform/CrossPlatformSection2";
import DevTech from "../../pages/crossplatform/DevTech";
import Hire from "../../pages/crossplatform/Hire";
import OurClient from "../../pages/crossplatform/OurClient";
import ThreePostsSection from "../../pages/crossplatform/ThreePostsSection";
import FAQ from "../../pages/crossplatform/FAQ";
import SuccessCases from "../../pages/crossplatform/SuccessCases";
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';

const CrossPlatformDev = () =>{
    return (
        <div>
            <Outsource/>
            <CrossPlatformSection/>
            <SoftwareAuditBanner/>
            <DevSection/>
            <CrossPlatformSection2/>
            <DevTech/>
            <Hire/>
            <OurClient/>
            <ThreePostsSection/>
            <FAQ/>
            <SuccessCases/>
            <BlogPostsCarousel/>
        </div>
    )
}

export default CrossPlatformDev;