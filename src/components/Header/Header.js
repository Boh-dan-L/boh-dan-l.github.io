import React from 'react'
import { Parallax } from 'react-parallax'
import { motion,useViewportScroll, useTransform } from "framer-motion";
import '../Header/header.scss'

const Header = () => {

    const navVariantsY = {
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 140,
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                delay: 0.1,
            },
        },
    };

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress,[1, 0], [0, 1]);

    return (
        <div id='home' className='header'>
            <Parallax bgImage="../../img/header-mob1.jpg"  bgClassName='parallax' bgImageAlt="the cat" strength={100}>
                <motion.div variants={navVariantsY} initial="hidden" whileInView="show" style={{scale}} className='header__img' >
                    <motion.div className='header__img--logo'/>
                </motion.div>
            </Parallax>
        </div>
    )
}

export default Header
