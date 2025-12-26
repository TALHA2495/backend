import React from 'react';
import Hero from '../Components/Home/Hero';
import Deals from '../Components/Home/Deals';
import SectionGrid from '../Components/Home/SectionGrid';
import InquiryForm from '../Components/Home/InquiryForm';
import Recommended from '../Components/Home/Recommended';
import Services from '../Components/Home/Services';
import SuppliersRegion from '../Components/Home/SuppliersRegion';
import Newsletter from '../Components/Home/Newsletter';
import { products } from '../data';
import homeBanner from '../assets/Image/backgrounds/Banner-board-800x420 2.png';
import electronicsBanner from '../assets/Image/backgrounds/image 106.png';

const Home = () => {
    
    // Data for "Home and Outdoor" - IDs 11-18
    const homeOutdoorItems = products.filter(p => p.id >= 11 && p.id <= 18);
    
    // Data for "Consumer electronics" - IDs 19-26
    const electronicsItems = products.filter(p => p.id >= 19 && p.id <= 26);

    return (
        <div className="bg-[#EFF2F4] pb-8">
            <Hero />
            <Deals />
            <SectionGrid 
               title="Home and outdoor" 
               bgImage={homeBanner} 
               items={homeOutdoorItems} 
            />
            <SectionGrid 
               title="Consumer electronics and gadgets" 
               bgImage={electronicsBanner} 
               items={electronicsItems} 
            />
            <InquiryForm />
            <Recommended />
            <Services />
            <SuppliersRegion />
            <Newsletter />
        </div>
    );
};

export default Home;