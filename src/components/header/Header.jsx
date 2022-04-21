import './Header.css'



function Header() {
    return (
        <nav className="flex justify-between w-3/4 center-div border-b-4 header__borderRadius">
            <div className=' text-teal-500 w-1/3 flex-none header__textPositionTitle text titleFont text-6xl'>Sebastiano Lanfranchi</div>
            <div className="flex justify-around header__textPosition w-3/12">
                <span>Front-End Dev</span>
                <span>Composer</span>
                <span>Photographer</span>
            </div>
        </nav>
    )
}

export default Header;