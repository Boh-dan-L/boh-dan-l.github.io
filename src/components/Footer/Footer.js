import React from 'react'
import Title from '../Text/Title'
import { FaTelegram } from "react-icons/fa"
import { BsFacebook } from "react-icons/bs"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { FaViber} from "react-icons/fa"
import './footer.scss'

const Footer = () => {
    return (
        <div id='contacts' className='footer'>
            <div className='footer__title'>
                <Title className='footer__title' footer='Контакти'/>
            </div>
            <div className='footer__tell'>
                <a className='footer__tell--namb' href='tel: +38068-244-80-79'><BsTelephoneForwardFill className='phone__icon'/>тел: +38068-244-80-79</a>
            </div>
            <div className='footer__mail'>
                <a className='footer__mail--text'  href='mailto: bksavi22@gmail.com '>e-mail: bksavi22@gmail.com</a>
            </div>
            <div className='footer__icons'>
                <a href='#' className='footer__icons--telega'><FaTelegram/></a>
                <a href='#' className='footer__icons--facebook'><BsFacebook/></a>
                <a href='#' className='footer__icons--viber'><FaViber/></a>
            </div>
        </div>
    )
}

export default Footer
