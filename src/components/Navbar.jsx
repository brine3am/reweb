import NavLogo from '../assets/navlogo.svg';
const Navbar = () => {
    return(
        <nav className="navbar">
                <img className='nav-logo' src={NavLogo} alt="" />
                <ul>
                    <li><a href="#hero-start">Home</a></li>
                    <li><a href="#proj-sec-start">Work</a></li>
                    {/* <li><a href="">Instagram</a></li> */}
                </ul>
        </nav>
    )
}

export default Navbar;