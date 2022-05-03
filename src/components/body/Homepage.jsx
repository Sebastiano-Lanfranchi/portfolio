import './Homepage.css';
import frntlg from '../../frntlg.jpg';
import cmplg from '../../cmplg.jfif';
import ptglg from '../../ptglg.jpg';
import React from 'react';
import useStore from '../services/store';
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSpotify, faInstagram, faFacebook, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons"


function Homepage() {

    const store = useStore();
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1gtMpBwepYM448ueL9JumlFlQZYayQJQY/view?usp=sharing",
            "cv.pdf"
        );
    };

    return (
        <div className="homepagePosition w-full fade-in-left" >
            {store.isSelect &&
                <div>
                    <div className='flex justify-between w-1/2 center-div pb-6 text-white'>
                        <div name="prima colonna" className="mr-10">
                            Ciao, sono uno sviluppatore Frontend, sviluppo in particolare con
                            Angular e React ma conosco anche Laravel e Vue.
                            Lavoro da 1 anno per FF3D.com
                        </div>
                        <div name="seconda colonna">
                            Oltre all'informatica ho altre passioni, il pianoforte e la fotografia.
                            Su questo portfolio potrete ascoltare e vedere i miei lavori.
                        </div>
                    </div>
                    <div className="center-div w-fit pb-6 ">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center duration-500" onClick={saveFile}>
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download CV</span>
                        </button>
                    </div>

                    <div className='flex justify-between w-3/4 center-div'>
                        <div className="w-1/3  cursor-pointer  mr-10" onClick={() => store.onOfHomepage('frn')}>
                            <img src={frntlg} className="imageWidth brightness-50 hover:brightness-125 duration-500 rounded-3xl" alt="frn" />
                            <div className="relative bottom-2/4 w-fit center-div text-white font-bold titleFont text-5xl">Front-end developer</div>
                        </div>
                        <div className="w-1/3  cursor-pointer mr-10" onClick={() => store.onOfHomepage('cmp')}>
                            <img src={cmplg} className="imageWidth brightness-50 hover:brightness-125 duration-500 rounded-3xl" alt="cmp" />
                            <div className="relative bottom-2/4 w-fit center-div text-white font-bold titleFont text-5xl" >Piano Composer</div>
                        </div>
                        <div className="w-1/3  cursor-pointer duration-500" onClick={() => store.onOfHomepage('pht')}>
                            <img src={ptglg} className="imageWidth brightness-50 hover:brightness-125 duration-500 rounded-3xl" alt="ptg" />
                            <div className="relative bottom-2/4 w-fit center-div text-white font-bold titleFont text-5xl">Amateur Photographer</div>
                        </div>
                    </div>
                    <div className="flex justify-around w-1/3 center-div text-white text-3xl">
                        <a href="https://www.linkedin.com/in/sebastiano-lanfranchi-5a26bb20a/" className="hover:blur-sm duration-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/Sebastiano-Lanfranchi" className="hover:blur-sm duration-500"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://open.spotify.com/artist/5FqMvwaT2BEGI1K275WDDn?si=88i0BV98QUO4Nm_jkAo_pw" className="hover:blur-sm duration-500"><FontAwesomeIcon icon={faSpotify} /></a>
                        <a href="https://www.instagram.com/seba_lanfra/" className="hover:blur-sm duration-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/sebastiano.lanfranchi" className="hover:blur-sm duration-500"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            }
            {store.frontElem &&
                <div>
                    <div className="w-1/3 center-div text-white">
                        <p>
                            L'informatica mi ha sempre incuriosito, già da piccolo avevo un vecchio PC con win 95 da cui tutto è iniziato.
                            Dopo gli studi da Geometra ho intrapreso gli studi da Programmatore Web con Boolean, 2 mesi dopo lavoravo già per FF3D.com
                        </p>
                        <div>Alcuni dei miei lavori:</div>
                    </div>
                    <ul className="cards">
                        <li>
                            <a href="https://github.com/Sebastiano-Lanfranchi/proj-html-vuejs" className="card">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQGOjoIjkqMDoA/profile-treasury-image-shrink_800_800/0/1618602825292?e=2147483647&v=beta&t=OFWR2WLB5KVmPE8t3y3nvn1Diz8x_66AIaLdQf7kjAQ" className="card__image w-full h-full object-cover" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <FontAwesomeIcon className="card__thumb" icon={faGithub} /> 
                                        <div className="card__header-text">
                                            <h3 className="card__title">Esercitazione template Phox</h3>
                                            <span className="card__status">25/02/2021</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Esercitazione Vue, copia del template wordpress Phlox</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Sebastiano-Lanfranchi/vue-boolflix" className="card">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQHT0iIU1fgl2Q/profile-treasury-image-shrink_800_800/0/1618602730720?e=2147483647&v=beta&t=nd5rIDlb_VMcjV-heGEb1LmkNLN1NQw4AEuijNphj5w" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <FontAwesomeIcon className="card__thumb" icon={faGithub} /> 
                                        <div className="card__header-text">
                                            <h3 className="card__title">Boolflix</h3>
                                            <span className="card__status">15/02/2021</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Esercitazione Vue e Laravel, copia grafica ed esercitazione chiamate api con Axios</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Sebastiano-Lanfranchi/html-css-spotifyweb" className="card">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQHWsFxQWOVChA/profile-treasury-image-shrink_800_800/0/1618603152404?e=2147483647&v=beta&t=2PNAyHOMpW6htFSf5uYhjXjOCEYRMyEc_IWyUuGGEDE" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <FontAwesomeIcon className="card__thumb" icon={faGithub} /> 
                                        <div className="card__header-text">
                                            <h3 className="card__title">Esercitazione grafica Spotify</h3>
                                            <span className="card__status">9/12/2020</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Esercitazione Vue e Laravel, copia grafica di Spotify</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://guazzabuglio.com/" className="card">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D2DAQF8Y9btsUNrcw/profile-treasury-image-shrink_800_800/0/1651572014140?e=2147483647&v=beta&t=2uVnH1VVFvlspEzjQ_uTXWYIqRTuAZUIqc-gQtXV0Nw" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <FontAwesomeIcon className="card__thumb" icon={faChrome} />
                                        <div className="card__header-text">
                                            <h3 className="card__title">Guazzabuglio</h3>
                                            <span className="card__status">20/10/2021</span>
                                        </div>
                                    </div>
                                    <p className="card__description">E-commerce di libri, attualmente online e operativo</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="w-fit center-div">
                         <button className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => store.onOfHomepage(null)}><FontAwesomeIcon icon={faHome} /></button>
                    </div>
                   
                </div>
            }
            {store.composerElem &&
                <div>
                    <div>Sono il compositore</div>
                    <button className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => store.onOfHomepage(null)}>prova</button>
                </div>

            }
            {store.photographerElem &&
                <div>
                    <div>Sono il fotografo</div>
                    <button className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => store.onOfHomepage(null)}>prova</button>k
                </div>

            }
        </div>
    )
}

export default Homepage;