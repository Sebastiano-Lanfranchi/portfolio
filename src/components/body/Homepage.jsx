import './Homepage.css';
import frntlg from '../../frntlg.jpg';
import cmplg from '../../cmplg.jfif';
import ptglg from '../../ptglg.jpg';
import React from 'react';
import useStore from '../services/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSpotify, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";


function Homepage() {

    const store = useStore();

    return (
        <div className="homepagePosition w-full" >
            {store.isSelect &&
                <div>
                    <div className='flex justify-between w-1/2 center-div pb-12 text-white'>
                        <div name="prima colonna" className="mr-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem enim eius laudantium dolores nam asperiores totam inventore.
                            Dolorum repellendus voluptates quia vitae placeat soluta odit! Alias nihil amet quod!
                        </div>
                        <div name="seconda colonna">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi mollitia animi harum earum odio, sunt praesentium optio, nesciunt tenetur totam
                            nulla explicabo illum velit iure magni, dolorem obcaecati? Totam, repellendus?
                        </div>
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
                <div>Sono il front-end developer</div>
            }
            {store.omposerElem &&
                <div>Sono il compositore</div>
            }
            {store.photographerElem &&
                <div>Sono il fotografo</div>
            }
            <button onClick={() => store.onOfHomepage(null)}>prova</button>
        </div>
    )
}

export default Homepage;