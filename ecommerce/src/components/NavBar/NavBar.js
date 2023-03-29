import CartWidget from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            <h3>ECCOMERCE</h3>
            <div className={styles.navMenu}>
                <button>Celulares</button>
                <button>Computadoras</button>
                <button>Impresoras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;