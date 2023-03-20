import React, { useState } from "react";
import { BiChevronDown} from "react-icons/bi"
import "./accordionCopy.scss"
import { motion } from "framer-motion";


const Accordion = (props) => {
    const [active, setActive] = useState(false)

    const navVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 240,
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                delay: 0.1,
            },
        },
    };

    return (
        <>
        <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            // viewport={{amout: 0.1, once: true,}}
            className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__btn" onClick={() => setActive(!active)}>
                <>{props.title} </>
                <div className="accordion__icon">
                    <BiChevronDown className='bx bxs-chevron-down'></BiChevronDown>
                </div>
            </div>
            <ul className='accordion__content'>
                        {props.text1 && <li className='accordion__content--li'>{props.text1}</li>}
                        {props.cursive1 && <li className='accordion__content--cursive'>{props.cursive1}</li>}
                        {props.cursive2 && <li className='accordion__content--cursive'>{props.cursive2}</li>}
                        {props.cursive3 && <li className='accordion__content--cursive'>{props.cursive3}</li>}
                        {props.text2 && <li className='accordion__content--li'>{props.text2}</li>}
                        {props.text3 && <li className='accordion__content--li'>{props.text3}</li>}
                        {props.text4 && <li className='accordion__content--li'>{props.text4}</li>}
                        {props.cursive4 && <li className='accordion__content--cursive'>{props.cursive4}</li>}
                        {props.cursive5 && <li className='accordion__content--cursive'>{props.cursive5}</li>}
                        {props.text5 && <li className='accordion__content--li'>{props.text5}</li>}
                        {props.text6 && <li className='accordion__content--li'>{props.text6}</li>}
                        {props.text7 && <li className='accordion__content--li'>{props.text7}</li>}
                        {props.text8 && <li className='accordion__content--li'>{props.text8}</li>}
                        {props.last && <li className='accordion__content--last'>{props.last}</li>}
            </ul>
        </motion.div>
        </>
    )
}

export default Accordion