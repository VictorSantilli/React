import './navbar-lateral.styles.css'

export function NavbarLateral() {
    return (
        <nav className="navbar-container">
            <div className='fotoImg'>
                <img
                    src="../src/assets/porquinho.jpg"
                    alt="foto usuario"
                    sizes="container"
                />
            </div>

            <ul className="navbar-actions">
                <a href="#"><li>Financeiro</li></a>
                <a href="#"><li>Rotina</li></a>
                <a href="#"><li>Metas</li></a>
                <a href="#"><li>Sair</li></a>
            </ul>
        </nav>
    )
}