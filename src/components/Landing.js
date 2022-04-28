import React, { useRef } from 'react'
import Navbar from './Navbar'
import '../styles/landing.css'
import yo from '../assets/yo.png'
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
/* SVGS */
import Cloud from '@mui/icons-material/CloudQueueRounded';
import Code from '@mui/icons-material/CodeRounded';
import Color from '@mui/icons-material/ColorLensRounded';
/* ANIMACION SLIDE */
import Slide from 'react-reveal/Slide';
const Landing = () => {
    const parallax = useParallax({
        speed: 30,
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (

        <>
            <div className="bg-gray-50 h-screen flex flex-col items-center w-full landing-container">
                <Navbar className="w-full top-0" />
                <img className='sticker' src='https://user-images.githubusercontent.com/91817152/165396732-662d0d38-9c9c-43be-8459-3fe70d3a7a65.png' alt='stickerhttps://user-images.githubusercontent.com/91817152/165396732-662d0d38-9c9c-43be-8459-3fe70d3a7a65.png' />
                <section>
                    <Slide left>
                        <h1 className="call-to-action">
                            Hola, soy Lucas Silva
                            <img className='emoji-feliz' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/grinning-face_1f600.png" />
                        </h1>
                    <p className='parraph'>
                        Desarrollador Full Stack MERN (MongoDB, Express, ReactJS, NodeJS). Si quieres conocerme solo dale click!
                    </p>
                    <button className='button'>
                        <span className="text">Empecemos!</span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                        <span className="blob"></span>
                    </button>
                </Slide>
                </section>

                <Slide left>

                <div className="container-yo">

                    <img src={yo} alt='yo' className='yo z-10' />
                </div>
                </Slide>

                <div className="circle-violet absolute w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="circle-yellow absolute bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
                <div className="circle-rose absolute bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <div className='services'>
                <div className='element-1' ref={parallax.ref} >
                    <img src='https://user-images.githubusercontent.com/91817152/165396694-27463b8f-571b-4fcb-9537-fbe7c434fe0e.svg' />
                </div>
                <div className='container-title'>
                    <h1 className='service-title'>
                        Sobre mi<span className='service-punto'>.</span>
                    </h1>
                    <img className='wave' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/water-wave_1f30a.png' />
                </div>
                <div className='main-service'>
                    <div className='habilities'>
                        <span className='habilities-text'>
                            MIS APTITUDES TÉCNICAS
                        </span>
                        <Slide left>

                        <div className='frontend'>
                            <img src='https://c1.wallpaperflare.com/preview/183/501/299/code-coding-programming-css.jpg' />
                            <span className='frontend-text'>
                                FRONTEND
                            </span>
                            <p className='parraph-cards'>
                                El frontend es la parte del desarrollo web que se dedica a la parte frontal de un sitio web, en pocas palabras del diseño de un sitio web, desde la estructura del sitio hasta los estilos como colores, fondos, tamaños hasta llegar a las animaciones y efectos.
                            </p>
                            <Code className='svg'/>
                        </div>
                </Slide>

                        <Slide left>

                        <div className='backend'>
                            <img src='https://www.bigdata4innovation.it/wp-content/uploads/sites/5/2020/03/shutterstock_403154125.jpg' />
                            <span className='backend-text'>
                                BACKEND
                            </span>
                            <p className='parraph-cards'>
                                El Backend, también conocido como CMS o Backoffice, es la parte de la app que el usuario final no puede ver. Su función es acceder a la información que se solicita, a través de la app, para luego combinarla y devolverla al usuario final
                            </p>
                            <Cloud className='svg'/>
                        </div>
                </Slide>
                <Slide left>

                        <div className='design'>
                            <img src='https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                            <span className='design-text'>
                                WEB DESIGN
                            </span>
                            <p className='parraph-cards'>
                                El diseño web es un área enfocada en el desarrollo de interfaces digitales, como el diseño de sitios y aplicaciones para web. Para ello, los diseñadores web crean las páginas utilizando lenguajes de marcado como HTML.
                            </p>
                            <Color className='svg'/>
                        </div>
                </Slide>

                    </div>
                    <div className='me'>
                        <span className='habilities-text'>
                            HABILIDADES BLANDAS
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing