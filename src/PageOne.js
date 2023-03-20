import React from 'react'
import Header from "./components/Header/Header";
import About from './components/About/About';
import Price from './components/Price/Price';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
// import Scroll from './components/Partners/Scroll';
import Objects from './components/Objects/Objects';

const PageOne = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Price />
            <Partners/>
            {/* <Scroll/> */}
            <Objects/>
            <Footer/>
        </div>
    )
}

export default PageOne
