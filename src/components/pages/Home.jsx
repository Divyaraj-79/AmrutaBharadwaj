import React from 'react';
import Hero from './sections/Hero';
import AboutPreview from './sections/AboutPreview';
import Pillars from './sections/Pillars';
import Principles from './sections/Principles';
import PracticeAreasPreview from './sections/PracticeAreasPreview';
import CareersPreview from './sections/CareersPreview';
import CTA from './sections/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutPreview />
            <Pillars />
            <Principles />
            <PracticeAreasPreview />
            <CareersPreview />
            <CTA />
        </>
    );
};

export default Home;
