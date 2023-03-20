import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import PageOne from "./PageOne";


const App = () => {

    return (
        <div>

                {/* <Navbar/>
                <Routes>
                    <Route path="/" element={<PageOne/>} />
                </Routes>
                <Footer/> */}
            <Navbar/>
            <PageOne/>
            {/* <Footer/> */}
        </div>
    )

};
export default App;