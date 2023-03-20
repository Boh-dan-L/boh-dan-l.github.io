import React,{forwardRef} from 'react'
import './title.scss'
import {motion} from 'framer-motion'

export const Title = forwardRef ((props, ref) => {
    return (
        <div
        ref={ref}
        className='title'>
            {props.about}{props.footer}{props.price}{props.objects}
        </div>
    )
})

export default Title
export const MTitle = motion (Title);
