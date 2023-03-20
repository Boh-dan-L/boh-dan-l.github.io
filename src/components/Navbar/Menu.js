import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform  } from 'framer-motion'
import { Link } from 'react-scroll'
import './menu.scss'
import { useViewportScroll } from 'framer-motion';


const Menu = ({items, active, setActive,scrollY}) => {

    const yInput = [660, 700];

    const background = useTransform(scrollY, yInput, [
        "transparent",
        "#195F85"
    ]);
    const boxShadow = useTransform(scrollY, yInput, ['none','0px 4px 4px rgba(0, 0, 0, 0.25)'])

    const click = ()=> setActive(!active);
    const close = ()=> setActive(false);


    return (
        <motion.div className={`menu ${active?'active menu__view':''}`} onClick ={click} >
            <motion.div style={{background, boxShadow }}  className='blur'/>
            <motion.div className='menu__content' onClick={e=>e.stopPropagation()}>
                <motion.ul>
                    {items.map(item =>
                        <motion.li key={item.id} className='menu__content--li'>
                            <Link to={item.to} href={item.href}  spy={false} smooth={true} offset={-80} duration={500} className='menu__content--a' onClick ={close} >{item.value}</Link>
                        </motion.li>
                    )}
                    <div className='menu__content--li'>
                        <a className='menu__content--a' href='tel: +38068-244-80-79'> +38068-244-80-79</a>
                    </div>
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Menu
