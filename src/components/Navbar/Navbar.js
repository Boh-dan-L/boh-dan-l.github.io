import React, { useState }  from "react";
import './navbar.scss'
import Menu from "./Menu";
import { motion,useScroll, useTransform  } from "framer-motion";
import { Link } from 'react-scroll'




function Navbar() {

    const [menuActive, setMenuActive] = useState(false);
    const items = [
        { id:1, value: 'про нас', to: 'about' },
        { id:2, value: 'послуги', to: 'price' },
        { id:3, value: 'партнери', to: 'partners' },
        { id:4, value: 'наші обʼєкти', to: 'objects'},
        { id:5, value: 'контакти', to: 'contacts' },
    ];

    const {scrollY} = useScroll(0);
    const y = [600, 660];

    const background = useTransform(scrollY, y, [
        "transparent",
        "#195F85"
    ]);

    const {scrollYProgress} = useScroll(0);
    const scale = useTransform(scrollY,y, [0, 1]);

    return (
        <header>
            <div className='nav'>
                <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="nav__link" onClick={e=>e.stopPropagation()}>
                    <motion.div style={{scale}} className='nav__link--logo' />
                    <div  className='nav__link--logo2' />
                </Link>
                <div className='nav__burger' onClick={() => setMenuActive(!menuActive)}>
                    <span className={menuActive ? 'nav__burger--btn active' : 'nav__burger--btn'} />
                </div>
            </div>
            <Menu scrollY={scrollY}  active={menuActive} setActive={setMenuActive} items={items} />
        </header>
    );
}

export default Navbar
