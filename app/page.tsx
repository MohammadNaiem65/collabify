import { Button } from '@/components/ui/button';
import React from 'react';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Hero from './components/home/Hero';

const Homepage = () => {
    return (
        <div>
          <Header></Header>
          <Hero></Hero>
          <Footer></Footer>
        </div>
    );
};

export default Homepage;