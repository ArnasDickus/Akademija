import React from 'react';

import Hero from './sections/hero/hero.section';
import WhyWorks from './sections/whyWorks/whyWorks.section';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <WhyWorks />
    </div>
  );
};

export default HomePage;
