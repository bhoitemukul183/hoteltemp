import React, { useEffect, useState } from 'react'
import './Digitel.css';
import off from '../../../src/Assets/off.gif';
import on from '../../../src/Assets/on.gif';
import { getElementError } from '@testing-library/react';
// import randomColor from "randomcolor";

function Digitel() {
    const [dyani, setColor] = useState('white');
    const [bulbState, setBulbState] = useState(off);

    function changeClass() {
        if (bulbState == off) {
            setBulbState(on)
            setColor('yellow')
        } else {
            setBulbState(off)
            setColor('white')
        }
    }











    return (
        <div className='main-container'>
            <div className='image-container'>
                <div className='image-sub-container'>
                    {/* style={{ boxShadow: shadowstate }} */}
                    <img src={bulbState} id='bulb1' />
                </div>
            </div>
            <div className='digitel-content-container'>
                <div className='digitel-content' style={{ color: dyani }}>Hello Dear..... On Your First Order Get 60% Discount And Also Free Delivery..♥ </div>
            </div>
            <div className='offers-btn' style={{ color: dyani }} onClick={changeClass} >Get Offers</div>
        </div >
    )
}
export default Digitel

// function bright() {
//     console.log('inside bright function 3')
//     const element = document.getElementById('mukul');
//     if (window.scrollY >= 800) {
//         element.style.opacity = Number(element.style.opacity) + 0.01;
//     } else {
//         element.style.opacity = 0.01;
//     }
// }

// window.addEventListener("scroll", bright);