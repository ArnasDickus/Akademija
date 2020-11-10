import React from 'react';
import './home.styles.scss';
import Hero from "./sections/hero/hero.section";
import WhyWorks from "./sections/whyWorks/whyWorks.section";

const Home = () => {
    return (
        <div>
           <Hero />
           <WhyWorks />
        </div>

    )
}

export default Home;
