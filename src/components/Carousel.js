import React, { useRef, useState } from "react";

import Herbal from '../assets/portadas apps/herbal-oil.jpg'
import Petshop from '../assets/portadas apps/petshop.jpg'
import Material from '../assets/portadas apps/material-dev.jpg'
import Gameover from '../assets/portadas apps/gameover.jpg'
import Amazing from '../assets/portadas apps/amazingEvents.jpg'
import Mytinerary from '../assets/portadas apps/mytinerary.jpg'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di'
import { SiMaterialui } from 'react-icons/si'

export default function App() {
    return (
        <div className="swiper">
                <div className='swiper-slide'>
                    <a href="https://github.com/Mrain00/Herbal-Oil" className='hipervinculo-portfolio'>
                        <img src={Herbal} alt='herbal oil' />
                        <h2 className='text-js'><DiJavascript1 className='fa-icon' />Herbal Oil</h2>
                    </a>
                </div>
                <div className='swiper-slide'>
                    <a href="https://github.com/Mrain00/Pet-Shop-Franco" className='hipervinculo-portfolio'>
                        <img src={Petshop} alt='petshop' />
                        <h2 className='text-js'><DiJavascript1 className='fa-icon' />Franco Petshop</h2>
                    </a>
                </div>
                <div className='swiper-slide'>
                    <a href='https://material-dev.vercel.app/' className='hipervinculo-portfolio'>
                        <img src={Material} alt='material' />
                        <h2 className='text-mui'><SiMaterialui className='fa-icon' />Material Dev</h2>
                    </a>
                </div>
                <div className='swiper-slide'>
                    <a href='https://github.com/Mrain00/Game-Over-Final-Challenge' className='hipervinculo-portfolio'>
                        <img src={Gameover} alt='game over' />
                        <h2 className='text-react'><FaReact className='fa-icon' />Game Over</h2>
                    </a>
                </div>
                <div className='swiper-slide'>
                    <a href="https://github.com/Mrain00/Amazing-Events" className='hipervinculo-portfolio'>
                        <img src={Amazing} alt='amazing events' />
                        <div className='text-js'>
                            <DiJavascript1 className='fa-icon' />
                            <h2 >Amazing Events</h2>
                        </div>
                    </a>
                </div>
                <div className='swiper-slide'>
                    <a href="https://github.com/Mrain00/MyTinerary-Silva" className='hipervinculo-portfolio'>
                        <img src={Mytinerary} alt='My tinerary' />
                        <h2 className='text-react'><FaReact className='fa-icon' />My Tinerary</h2>
                    </a>
                </div>
        </div>
    );
}
