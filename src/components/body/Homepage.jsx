import './Homepage.css'



function Homepage() {
    return (
        <div className="homepagePosition w-full">
            <div className='flex justify-between w-1/2 center-div'>
                <div className='flex flex-col text-pink-50'>
                    <span className='flex justify-between text-center mb-20'>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated'>Q</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign titleFont text-5xl ml-14 mt-2">Front-End Dev</div>
                    </span>
                    <span className='flex justify-between mb-20'>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated'>W</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign titleFont text-5xl ml-14 mt-2">Composer</div>
                    </span>
                    <span className='flex justify-between'>
                        <div className='containerEstKey'>
                            <div className='containerIntKey'>
                                <div className='containerLetter rainbow rainbow_text_animated pl-1'>E</div>
                            </div>
                        </div>
                        <div className="textVerticalAlign ml-12 titleFont text-5xl ml-14 mt-2">Photographer</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Homepage;