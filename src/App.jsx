import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust path as necessary
import CompanyPage from './pages/CompanyPage'; // Adjust path as necessary
import ServicesPage from './pages/ServicesPage'; // Adjust path as necessary
import ContactUsPage from './pages/ContactUsPage';
 import IndustriesPage from './pages/IndustriesPage';
 import TechnologiesPage from './pages/TechnologiesPage';
 import ClientsPage from './pages/ClientsPage';
 import Header from './components/header/Header'; // Adjust path as necessary
import TopBar from './components/header/TopBar'; // Adjust path as necessary
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/footer/Footer';
import AboutUS from './components/company/aboutUS/AboutUS';
import ReactJsPage from './pages/technologiesPages/ReactJsPage';
import ContactForm from './components/career/career';
import SoftwareDevelopment from './components/services/softwaredev';
import MobileDev from './components/services/mobiledev';
import ReactNativePage from './pages/technologiesPages/ReactNativePage';
import FlutterPage from './pages/technologiesPages/FlutterPage';
import NodeJsPage from './pages/technologiesPages/NodeJsPage';
import SpringBoot from './pages/technologiesPages/SpringBoot';
import PhpPage from './pages/technologiesPages/PhpPage';
import Sql from './pages/technologiesPages/Sql';
import HtmlCssJs from './pages/technologiesPages/HtmlCssJs';
import ProductDevelopment from './components/services/ProductDevelopment';
import WebsiteDev from './components/services/WebsiteDev';
import MvpDev from './components/services/MvpDev';
import SeoAndDigitalMarketing from './components/services/SeoAndDigitalMarketing';
import CrossPlatformDev from './components/services/CrossPlatformDev';
import UiUxDev from './components/services/UiUxDev';

function App() {
  return (
    <Router>
         {/* Always visible */}
        <Header /> {/* Always visible */}
      <Routes>
        
        {/* Redirect root path to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Define other routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/career" element={<ContactForm/>} />
        <Route path="/services" element={<ServicesPage />} />
        {/* service pages */}
        <Route path="/services/software-development" element={<SoftwareDevelopment/>} />
        <Route path="/services/mobile-development" element={<MobileDev/>} />
        <Route path="/services/productdevelopment" element={<ProductDevelopment/>} />
        <Route path="/services/website-development" element={<WebsiteDev/>} />
        <Route path="/services/mvpdev" element={<MvpDev/>} />
        <Route path='/services/seo-digitalmarketing' element={<SeoAndDigitalMarketing/>}/>
        <Route path='/services/cross-platform' element={<CrossPlatformDev/>}/>
        <Route path='/services/uiuxdev' element={<UiUxDev/>}/>


        <Route path="contact" element={<ContactUsPage />} />
         <Route path="industries" element={<IndustriesPage />} />
        {/* <Route path="/technologies" element={<TechnologiesPage />} /> */}
          <Route path="/clients" element={<ClientsPage />} />
        <Route path="/company/about-us" element={<AboutUS/>} />


	 <Route path="/technologies/reactjs" element={<ReactJsPage />} />
   <Route path="/technologies/reactnative" element={<ReactNativePage/>} />
   <Route path="/technologies/flutter" element={<FlutterPage/>} />
   <Route path="/technologies/nodejs" element={<NodeJsPage/>}/>
   <Route path="/technologies/spring-boot" element={<SpringBoot/>}/>
   <Route path="/technologies/php" element={<PhpPage/>}/>  
   <Route path="/technologies/sql" element={<Sql/>}/>   
   <Route path="/technologies/htmlcssjs" element={<HtmlCssJs/>}/>     

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
   <Footer/>
    </Router>
  );
}

export default App;

