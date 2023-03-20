import React from 'react'
import Title from '../Text/Title'
import SubTitle from '../Text/SubTitle';
import { motion } from "framer-motion";
import  './about.scss'

const About = () => {

    const animate = {
        hidden: {
            scale: 0.5,
            opacity: 0,
            // y: 10,
            transition: {
                type: 'scale',
                stiffness: 300,
                damping: 140,
            },
        },
        show: {
            scale: 1,
            opacity: 1,
            // y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }
        },
    };

    return (
        <motion.div
        id='about' className='about'>
            <motion.div
            variants={animate}
            initial="hidden"
            whileInView="show"
            viewport={{amout: 0.1, once: true,}}
            className='about__title'>
                <Title  about='ПРО НАС'/>
            </motion.div>
            <motion.div
            variants={animate}
            initial="hidden"
            whileInView="show"
            viewport={{amout: 0.1, once: true,}}
            className='about__subtitle'>
                <SubTitle  about='Ми - ТОВ «БК С.А.В.І.» пропонуємо свої послуги в сфері виконання гідроізоляційних робіт та благоустрою територій. Маємо чудовий досвід в напрямку даних будівельно-монтажних робіт та штат досвідчених спеціалістів. Забезпечимо виконання в поставлені терміни.Гарантія на виконані роботи – 10 років.Допоможемо обрати найбільш ефективне та економне технологічне рішення для усунення затікань в будівлі та організації благоустрою. Завдяки партнерським відносинам із спеціалізованими постачальниками, забезпечимо поставку матеріалів по цінах із суттєвою знижкою, порівняно з ринковою.'/>
            </motion.div>
        </motion.div>
    )
}

export default About
