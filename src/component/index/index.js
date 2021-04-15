import React from 'react';
import Home from '../home/home';
import Profile from '../profile/profile';
import Portfolio from '../portfolio/portfolio';
import Work from '../work/work';
import About from '../about/about';
import Footer from '../footer/footer';


const Index =()=>{
    return(
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Footer />
        </div>
    )
}
export default Index ;