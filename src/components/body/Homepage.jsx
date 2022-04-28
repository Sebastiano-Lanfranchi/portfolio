import './Homepage.css';
import frntlg from '../../frntlg.jpg';
import cmplg from '../../cmplg.jpg';
import ptglg from '../../ptglg.jpg';
import React, { useState } from 'react';

function Homepage() {

    const [frontElem, setFrontElem] = useState(false);
    const [composerElem, setComposerElem] = useState(false);
    const [photographerElem, setPhotographerElem] = useState(false);
    const [isSelect, setSelect] = useState(true);

    function onOfHomepage(page) {
        if (page) {
            setSelect(false)
            switch (page) {
                case 'frn':
                    setFrontElem(true)
                    break;
                case 'cmp':
                    setComposerElem(true)
                    break;
                case 'pht':
                    setPhotographerElem(true)
                    break;
            }
        } else {
            if (isSelect)
                return setSelect(false)
            else {
                setFrontElem(false);
                setComposerElem(false);
                setPhotographerElem(false);
                return setSelect(true)
            }
        }
    }

    return (
        <div className="homepagePosition w-full" >
            {isSelect &&
                <div>
                    <div className='flex justify-between w-1/2 center-div pb-20'>
                        <div name="prima colonna">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem enim eius laudantium dolores nam asperiores totam inventore.
                            Dolorum repellendus voluptates quia vitae placeat soluta odit! Alias nihil amet quod!
                        </div>
                        <div name="seconda colonna">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi mollitia animi harum earum odio, sunt praesentium optio, nesciunt tenetur totam
                            nulla explicabo illum velit iure magni, dolorem obcaecati? Totam, repellendus?
                        </div>
                    </div>
                    <div className='flex justify-between w-3/4 center-div'>
                        <div className="w-1/3 brightness-50 hover:brightness-100 cursor-pointer" onClick={() => onOfHomepage('frn')}>
                            <img src={frntlg} className="imageWidth" alt="frn" />
                        </div>
                        <div className="w-1/3 brightness-50 hover:brightness-100 cursor-pointer" onClick={() => onOfHomepage('cmp')}>
                            <img src={cmplg} className="imageWidth" alt="cmp" />
                        </div>
                        <div className="w-1/3 brightness-50 hover:brightness-100 cursor-pointer" onClick={() => onOfHomepage('pht')}>
                            <img src={ptglg} className="imageWidth" alt="ptg" />
                        </div>
                    </div>
                </div>
            }
            {frontElem &&
                <div>Sono il front-end developer</div>
            }
            {composerElem &&
                <div>Sono il compositore</div>
            }
            {photographerElem &&
                <div>Sono il fotografo</div>
            }
            <button onClick={() => onOfHomepage(null)}>prova</button>
        </div>
    )
}

export default Homepage;