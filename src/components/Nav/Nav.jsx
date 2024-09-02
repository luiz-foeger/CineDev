import { Link } from 'react-router-dom';
// import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'; import de bibliotecas de icones do react-icons
// import { useNavigate } from 'react-router-dom';
import './Nav.module.css';

function NavRoute() {
    return (
        <nav id="nav">
            <div>
                <h3>
                    <Link to="/">Mais Populares </Link>
                    <Link to="/">Mais Aclamados</Link>
                </h3>
            </div>

        </nav>
    );
}

export default NavRoute;
