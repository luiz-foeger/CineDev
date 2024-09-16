import { Link } from 'react-router-dom';
import estilos from './Nav.module.css';

function NavRoute() {
    return (
        <nav className={estilos.nav}>
            <div>
                <h3>
                    <Link to="/populares">Mais Populares </Link>
                    <Link to="/">Lançamentos</Link>
                    <Link to="/recomendados">Recomendados</Link>
                </h3>
            </div>

        </nav>
    );
}

export default NavRoute;