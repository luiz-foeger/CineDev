import estilos from './Header.module.css';
import logo from '../../img/CineDev.png'

function Header() {
    return (
        <header className={estilos.header}>
                <img className={estilos.logo} src={logo} alt="Logo do Projeto" />
        </header>
    );
}

export default Header;
