import './Header.css'
import useStore from '../services/store';

function Header() {

    const store = useStore();
    return (
        <nav className="flex justify-between w-3/4 center-div border-b-4 header__borderRadius pt-4 fade-in-left">
            <div className='w-1/3 flex-none header__textPositionTitle text titleFont text-6xl pt-3 font-bold text-white'>Sebastiano Lanfranchi</div>
            <div className="flex justify-around header__textPosition w-1/3 text-white">
                <div className='hover:blur-sm cursor-pointer duration-300'  onClick={() => store.onOfHomepage('frn')}>Front-End Dev</div>    
                <div className='hover:blur-sm cursor-pointer duration-300' onClick={() => store.onOfHomepage('cmp')}>Composer</div>
                <div className='hover:blur-sm cursor-pointer duration-300' onClick={() => store.onOfHomepage('pht')}>Photographer</div>
                <div className='hover:blur-sm cursor-pointer duration-300' onClick={() => store.onOfHomepage('cnt')}>Contatti</div>
            </div>
        </nav>
    )
}

export default Header;