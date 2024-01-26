import { NavLink, Outlet, Link } from "react-router-dom"
import { useRef, useState } from "react";
import Footer from "../components/footer";
import Resources from "../components/resources";
import '../components/Navbar.css';

export default function RootLayout() {

    const resources = useRef(null);


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        }
        )
    }

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    return (
        <div className="nav-section">
            <header>
                <nav>
                    <NavLink to="/"><img src='/images/logo.webp' /></NavLink>

                    <div className="menu-icon" onClick={handleClick}>

                        <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />

                    </div>

                    <ul id="nav-items" className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/programmes' className="nav-links" onClick={closeMobileMenu}>
                                Programmes
                            </Link>
                        </li>
                        <li>
                            <Link to='/classes' className="nav-links" onClick={closeMobileMenu}>
                                Classes
                            </Link>
                        </li>
                        <li>
                            <Link to='/resources' className="nav-links" onClick={closeMobileMenu}>
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <a className='sign-up'>
                        <NavLink to="/portal"> <button>Portal</button> </NavLink>
                    </a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

