import React from 'react'
import Navbar from './Navbar'
import '../styles/landing.css'
import yo from '../assets/yo.png'
const Landing = () => {
    return (
        <div className="bg-gray-50 h-screen flex flex-col items-center w-full landing-container">
            <Navbar className="w-full top-0" />
            <div className=" w-full flex items-center justify-between container-home">
                <section>
                    <h1 className="call-to-action">
                        Hola, soy Lucas Silva
                        <img className='emoji-feliz' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/grinning-face_1f600.png" />
                    </h1>
                    <p className='parraph'>
                        Desarrollador Full Stack MERN (MongoDB, Express, ReactJS, NodeJS) con preferencia al Frontend.
                    </p>
                    <button className='button'>
                        <span className="text">Empecemos!</span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                    </button>
                </section>
                <div className="yo-container flex items-center justify-center">
                    <img src={yo} alt='yo' className='yo z-10' />
                    <div className="circle absolute bottom-32 w-72 h-72 mix-blend-multiply bg-purple-300 rounded-full mix-blend filter blur-xl opacity-70 animate-blob animation-delay-2000 delay-200"></div>
                    <div className="circle absolute left-32 w-72 h-72 mix-blend-multiply bg-yellow-300 rounded-full mix-blend filter blur-xl opacity-70"></div>
                    <div className="circle absolute right-40 w-72 h-72 mix-blend-multiply bg-pink-300 rounded-full mix-blend filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>
                <div className="circle circle-bottom absolute bg-sky-300 rounded-full mix-blend filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    )
}

export default Landing