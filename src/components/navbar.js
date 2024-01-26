

function Navbar() {

    return (
        <header className='nav-section'>

            <nav>
                <a href='home.js'><img src='/images/logo.webp'></img></a>
                <ul id="nav-items">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Programmes</a></li>
                    <li><a href="#">Classes</a></li>
                    <li><a href="#">Resourcses</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href='#' className='sign-up'><button>Portal</button></a>
            </nav>
        </header>
    );
};

export default Navbar;