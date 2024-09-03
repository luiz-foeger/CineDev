import { Link } from 'react-router-dom';
import estilos from './Nav.module.css';

function NavRoute() {
    return (
        <nav className={estilos.nav}>
            <div>
                <h3>
                    <Link to="/filmesAclamados">Mais Populares </Link>
                    <Link to="/">Lançamentos</Link>
                    <Link to="/">Recomendados</Link>
                </h3>
            </div>

        </nav>
    );
}

export default NavRoute;
