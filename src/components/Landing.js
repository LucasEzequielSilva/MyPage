import React, { useRef } from 'react'
import Navbar from './Navbar'
import '../styles/landing.css'
import yo from '../assets/yo.png'
/* SVGS */
import Cloud from '@mui/icons-material/CloudQueueRounded';
import Code from '@mui/icons-material/CodeRounded';
import Color from '@mui/icons-material/ColorLensRounded';

/* ANIMACION SLIDE */
import Slide from 'react-reveal/Slide';
/* IMGS */
import ReactImg from '../assets/react.png';
import Git from '../assets/git.png';
import Html from '../assets/html5.png';
import Css from '../assets/css.png';
import Javascript from '../assets/java-script.png';
import Github from '../assets/github.png';
import Node from '../assets/node.png';
import Redux from '../assets/redux.png';
import Postman from '../assets/postman.png';
import SQL from '../assets/mysql.png';
import Photoshop from '../assets/photoshop.png';
import MongoDB from '../assets/mongodb.png';
import Express from '../assets/express.png';
import ScrollToTop from "react-scroll-to-top";
import Carousel from './Carousel'
import Timeline from './Timeline'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Landing = () => {
    return (
        <>
            <ScrollToTop />
            <div className="bg-gray-50 h-screen flex flex-col items-center w-full landing-container">
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
                            <span className="text">
                                <a href='#service'>
                                    Empecemos!
                                </a></span>
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

                <div className="circle circle-violet absolute w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="circle circle-yellow absolute bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
                <div className="circle circle-rose absolute bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <div className='services' id='service'>
                <div className='container-title'>
                    <h1 className='service-title'>
                        Sobre mi<span className='service-punto'>.</span>
                    </h1>
                    {/* <img className='wave' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/water-wave_1f30a.png' /> */}
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
                                <Code className='svg' />
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
                                <Cloud className='svg' />
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
                                <Color className='svg' />
                            </div>
                        </Slide>

                    </div>
                    <div className='me'>
                        <span className='habilities-text'>
                            HABILIDADES BLANDAS
                        </span>
                        <div className='habilities-blandas'>
                            <p>Trabajo en equipo</p>
                            <p>Adaptabilidad</p>
                            <p>Responsabilidad</p>
                            <p>Empatía</p>
                            <p>Organización</p>
                            <p>Pensamiento creativo</p>
                            <p>Escucha activa</p>
                            <p>Comunicación</p>
                            <p>Orientación a resultados</p>
                            <p>Productividad</p>
                        </div>
                        <span className='habilities-text resumen'>
                            UN POCO DE MI
                        </span>
                        <p className='resumen-text'>
                        Desarrollador Full Stack MERN & Mobile Apps y actualmente capacitándose en Diseño UX/UI.
Me gusta entender los problemas que hay que resolver y me exijo constantemente para mejorar. Mi rutina diaria se basa en desarrollar aplicaciones atractivas por mi cuenta siempre pensando en la experiencia de usuario y adquirir constantemente información de las nuevas tecnologías usadas, mi objetivo es fortalecer mis debilidades en la disciplina y progresar ampliamente en otras que me ayuden en el desarrollo.
                        </p>
                        <span className='habilities-text resumen'>
                            TECNOLOGIAS
                        </span>
                        <div className="resumen-text tecnologias-container">
                            <div>
                                <img src={Photoshop} className="tecnologias-imgs" />
                                <p>Photoshop</p>
                            </div>
                            <div>
                                <img src={SQL} className="tecnologias-imgs" />
                                <p>MySQL</p>

                            </div>
                            <div>
                                <img src={Postman} className="tecnologias-imgs" />
                                <p>Postman</p>
                            </div>
                            <div>
                                <img src={Redux} className="tecnologias-imgs" />
                                <p>Redux</p>
                            </div>
                            <div>
                                <img src={Git} className="tecnologias-imgs" />
                                <p>Git</p>
                            </div>
                            <div>
                                <img src={Github} className="tecnologias-imgs" />
                                <p>Github</p>
                            </div>
                            <div>
                                <img src={Javascript} className="tecnologias-imgs" />
                                <p>Javascript</p>
                            </div>
                            <div>
                                <img src={Css} className="tecnologias-imgs css" />
                                <p>Css</p>
                            </div>
                            <div>
                                <img src={Html} className="tecnologias-imgs html" />
                                <p>Html</p>
                            </div>
                            <div>
                                <img src={ReactImg} className="tecnologias-imgs" />
                                <p>React</p>
                            </div>
                            <div>
                                <img src={MongoDB} className="tecnologias-imgs" />
                                <p>MongoDB</p>
                            </div>
                            <div>
                                <img src={Node} className="tecnologias-imgs" />
                                <p>Node</p>
                            </div>
                            <div>
                                <img src={Express} className="tecnologias-imgs express" />
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services portfolio'>
                <div className='container-title'>
                    <h1 className='service-title'>
                        Mi portfolio<span className='service-punto portfolio-punto'>.</span>
                    </h1>
                    {/* <img className='wave' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/briefcase_1f4bc.png' /> */}
                </div>
                <Carousel />
            </div>
            <div className='services portfolio'>
                <div className='container-title'>
                    <h1 className='service-title capacitaciones'>
                        Capacitaciones<span className='service-punto educación-punto'>.</span>
                    </h1>
                    {/* <img className='wave' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/briefcase_1f4bc.png' /> */}
                </div>
                <Timeline />
                <footer>
                    <p>Lucas Ezequiel Silva</p>
                    <div className='social-icons'>
                        <a href='https://www.linkedin.com/in/lucasezequielsilva/'><AiOutlineLinkedin /></a>
                        <a href='https://github.com/Mrain00'><AiOutlineGithub /></a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Landing