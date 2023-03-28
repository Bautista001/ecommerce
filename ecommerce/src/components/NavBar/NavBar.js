import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="row justify-content-between align-items-center p-3">
            <h3>Ecommerce Mori</h3>
            <div>
                <button>Celulares</button>
                <button>Computadoras</button>
                <button>Impresoras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;