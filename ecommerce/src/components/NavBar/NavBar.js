import CartWidget from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css";
import { NavLink, Link  } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            <Link to='/'>
                <h2>ECCOMERCE</h2>
            </Link>
            <div className={styles.navMenu}>
                <NavLink to={`/category/Celulares`} className={( {isActive}) => isActive ? (styles.navItemActive, styles.navItem) : styles.navItem }>Celulares</NavLink>
                <NavLink to={`/category/Computadoras`} className={( {isActive}) => isActive ? (styles.navItemActive, styles.navItem): styles.navItem }>Computadoras</NavLink>
                <NavLink to={`/category/Perifericos`} className={( {isActive}) => isActive ? (styles.navItemActive, styles.navItem): styles.navItem }>Periféricos</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;