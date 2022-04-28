import './Homepage.css';
import frntlg from '../../frntlg.jpg';
import cmplg from '../../cmplg.jpg';
import ptglg from '../../ptglg.jpg';
import React, { useState } from 'react';

function Homepage() {

    const [imgHome, setImgHome] = useState(<div className='max-w-xl relative left-1/4 bottom-24'><img src={frntlg} alt="frn" /></div>);

    function changeImgJumbo(item) {
        if (item === 'dev') {
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={frntlg} alt="frn" /></div>)
        } else if (item === 'composer') {
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={cmplg} alt="cmp" /></div>)
        } else {
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={ptglg} alt="ptg" /></div>)
        }
    }

    return (
        <div className="homepagePosition w-full" >
            <div className='flex justify-between w-3/4 center-div'>
                <div className="w-1/3 brightness-50 hover:brightness-100">
                    <img src={frntlg} className="imageWidth" alt="frn" />
                </div>
                <div className="w-1/3 brightness-50 hover:brightness-100">
                    <img src={cmplg} className="imageWidth" alt="cmp" />    
                </div>
                <div className="w-1/3 brightness-50 hover:brightness-100">
                    <img src={ptglg} className="imageWidth"alt="ptg" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;