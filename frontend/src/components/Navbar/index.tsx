import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className="ssmovie-nav-content">
                    <h1>SS Filmes</h1>
                    <a href="https://github.com/Lispaum">
                        <div className="ssmovie-contact-container">
                            <GithubIcon />
                            /Lispaum
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;