import React from 'react'
import Outsource from '../../pages/productdevpages/Outsource';
import ClientLogosSection from '../../components/common/ClientLogosSection';
import ClientTestimonial from '../../pages/productdevpages/ClientTestimonial';
import TestimonialsSection from '../../components/common/TestimonialsSection';
import SoftwareAuditBanner from '../../components/common/SoftwareAuditBanner';
import ServicesSection from '../../pages/productdevpages/ServicesSection';
import DevelopmentService from '../../pages/productdevpages/DevelopmentService';
import CTA from '../../pages/productdevpages/CTA';
import SoftwareDevelopment from '../../pages/productdevpages/SoftwareDevelopment';
import EndToEnd from '../../pages/productdevpages/EndToEnd';
import CTA2 from '../../pages/productdevpages/CTA2';
import OurSuccess from '../../pages/productdevpages/OurSuccess';
import DevProcess from '../../pages/productdevpages/DevProcess';
import Industries from '../../pages/productdevpages/Industries';
import ServiceAndTech from '../../pages/productdevpages/ServiceAndTech';
import OurCollaboration from '../../pages/productdevpages/OurCollaboration';
import FAQ from '../../pages/productdevpages/FAQ';
import ContactForm from '../../components/common/ContactForm';
import BlogPostsCarousel from '../../components/technologies/ReactJs/BlogPostsCarousel';

const ProductDevelopment = () => {
  return (
    <div>
      <Outsource/>
      <ClientLogosSection/>
      <ClientTestimonial/>
      <TestimonialsSection/>
      <SoftwareAuditBanner/>
      <ServicesSection/>
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

export default ProductDevelopment
