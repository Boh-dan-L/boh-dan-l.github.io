import React from 'react'
import Accordion from '../Accordion/Accordion'
import { motion } from "framer-motion";
import './price.scss'


const Price = () => {

    const navVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0,
            // y: -10,
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

    const navVariantsY = {
        hidden: {
            opacity: 0,
            y: -100,
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
                // type: 'spring',
                stiffness: 80,
                delay: 0.1,
            },
        },
    };


        const prices = [
            {
                id:1,
                title:'Гідроізоляція будівель',
                text1:'Влаштування тепло-, гідроізоляції плоских покрівель, включаючи:',
                cursive1:'покрівлі «традиційного» типу',
                cursive2:'інверсійні покрівлі з баластним шаром з щебню та ФЕМ',
                cursive3:'інверсійні покрівлі під озеленення',
                text2:'Влаштування тепло-, гідроізоляції балконів, терас, лоджій',
                text3:'Ремонт та відновлення гідроізоляції існуючих покрівель',
                text4:'Зовнішня підземна гідроізоляція будівель, включаючи:',
                cursive4:'гідроізоляцію пальового поля',
                cursive5:'гідроізоляцію підпірних стін',
                text5:'Влаштування ФЕМ та гранітної плитки по підготовці',
                text6:'Влаштування асфальтобетонних доріжок та площадок',
                text7:'Монтаж водовідвідних лотків',
                text8:'Влаштування каналізаційних люків',
                last:'Прим. Працюємо як з рулонними так і з обмазувальними матеріалами.',
            },
            {
                id:2,
                title:'Промислові підлоги',
                text1:'Влаштування залізобетонної стяжки',
                text2:'Влаштування покриття підлог з топінгу',
                text3:'Влаштування літієвих підлог',
                text4:'Влаштування полімерних покриттів',
            },
            {
                id:3,
                title:'Благоустрій території',
                text1:'Планування території під озеленення та благоустрій',
                text2:'Розробка грунту ручним та механізованим способом',
                text3:'Влаштування піщано-щебеневих шарів',
                text4:'Влаштування силової плити',
                text5:'Влаштування ФЕМ та гранітної плитки по підготовці',
                text6:'Влаштування асфальтобетонних доріжок та площадок',
                text7:'Монтаж водовідвідних лотків',
                text8:'Влаштування каналізаційних люків',
            },
            {
                id:4,
                title:'Покрівлі',
                text1:'Скатні покрівлі',
                text2:'Плоскі покрівлі',
            },
            {
                id:5,
                title:'Опоряджувальні роботи',
                text1:'Малярні роботи',
                text2:'Штукатурні роботи',
                text3:'Влаштування плитки',
                text4:'Влаштування стяжки',
                text6:'Сантехнічні роботи',
            },
            {
                id:6,
                title:'Монолітні роботи',
                text1:'Влаштування монолітних колон та перекриттів',
                text2:'Влаштування фундаментів',
                text3:'Каркасне та безкаркасне будівництво',
            },
        ]


    return (
        <motion.div
        id='price' className='price' >
            <motion.div
            variants={navVariantsY}
            initial="hidden"
            whileInView="show"
            viewport={{amout: 0.1, once: true,}}
            className='price__title'>
                ПОСЛУГИ
            </motion.div>
            <motion.div
            variants={navVariants}
            initial="hidden"
            viewport={{amout: 0.1, once: true,}}
            whileInView="show"
            className='price__img'/>
            {prices.map(item =>
            <Accordion
            key={item.id}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            text4={item.text4}
            text5={item.text5}
            text6={item.text6}
            text7={item.text7}
            text8={item.text8}
            cursive1={item.cursive1}
            cursive2={item.cursive2}
            cursive3={item.cursive3}
            cursive4={item.cursive4}
            cursive5={item.cursive5}
            last={item.last} />
            )}
        </motion.div>
    )
}

export default Price
