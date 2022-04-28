import './Homepage.css';
import frntlg from '../../frntlg.jpg';
import cmplg from '../../cmplg.jpg';
import ptglg from '../../ptglg.jpg';
import React from 'react';
import useStore from '../services/store';


function Homepage() {

    const store = useStore();

    return (
        <div className="homepagePosition w-full" >
            {store.isSelect &&
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
                        <div className="w-1/3 brightness-50 hover:brightness-125 cursor-pointer duration-500" onClick={() => store.onOfHomepage('frn')}>
                            <img src={frntlg} className="imageWidth" alt="frn" />
                        </div>
                        <div className="w-1/3 brightness-50 hover:brightness-125 cursor-pointer duration-500" onClick={() => store.onOfHomepage('cmp')}>
                            <img src={cmplg} className="imageWidth" alt="cmp" />
                        </div>
                        <div className="w-1/3 brightness-50 hover:brightness-125 cursor-pointer duration-500" onClick={() => store.onOfHomepage('pht')}>
                            <img src={ptglg} className="imageWidth" alt="ptg" />
                        </div>
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