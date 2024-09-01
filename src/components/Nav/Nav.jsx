import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'; // import de bibliotecas de icones do react-icons
// import { useNavigate } from 'react-router-dom';
import './Nav.module.css';

function NavRoute() {
    return (
        <nav id="nav">
            <h2>
                {/* <Link to="/"><BiCameraMovie />Mais Populares </Link> */}
                <Link to="/"><BiCameraMovie />Mais Populares </Link>

                <Link to="/"><BiCameraMovie />Mais Aclamados</Link>
            </h2>
            {/* <form action="">
                <input type="text" placeholder="Search" />
                <button type="submit">
                <BiSearchAlt2 />
                </button>
            </form> */}
            </nav>
    );
}

export default NavRoute;
