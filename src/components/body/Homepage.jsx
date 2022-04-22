import './Homepage.css';
import frntlg from '../../frntlg.png';
import cmplg from '../../cmplg.png';
import ptglg from '../../ptglg.png';
import React, { useState } from 'react';

function Homepage() {

    const [imgHome, setImgHome] = React.useState(<div className='max-w-xl relative left-1/4 bottom-24'><img src={frntlg} /></div>);

    function changeImgJumbo(item) {
        if (item == 'dev') {
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={frntlg} /></div>)
        }
        else if (item == 'composer') {
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={cmplg} /></div>)
        }else{
            return setImgHome(<div className='max-w-xl relative left-1/4 bottom-24'><img src={ptglg} /></div>)
        }
    }

    return (
        <div className="homepagePosition w-full" >
            <div className='flex justify-between w-1/2 center-div'>
                <div className='flex flex-col text-pink-50'>
                    <span className='flex justify-between text-center mb-24 cursor-pointer' onClick={() => changeImgJumbo('dev')}>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated'>Q</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign titleFont text-5xl ml-14 mt-2">Front-End Dev</div>
                    </span>
                    <span className='flex justify-between mb-24 cursor-pointer' onClick={() => changeImgJumbo('composer')}>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated'>W</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign titleFont text-5xl ml-14 mt-2">Composer</div>
                    </span>
                    <span className='flex justify-between' onClick={() => changeImgJumbo('photographer')}>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated pl-1'>E</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign ml-12 titleFont text-5xl ml-14 mt-2">Photographer</div>
                    </span>
                </div>
                {imgHome}
            </div>
        </div>
    )
}

export default Homepage;