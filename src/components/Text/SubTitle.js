import React from 'react'
import './subtitle.scss'

const SubTitle = (props) => {
    return (
        <div className='subtitle'>
        {props.about}{props.price1}{props.price2}{props.price3}{props.price4}{props.price5}{props.price6}{props.price7}{props.price8}
        </div>
    )
}

export default SubTitle
