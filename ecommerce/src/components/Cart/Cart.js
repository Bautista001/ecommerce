import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../Context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    
    if(totalQuantity() === 0 ) {
        return (
            <div className="pt-5">
                <h2 className={styles.Title}>Tu carrito está vacío</h2>
                <Link to={`/`} className={styles.Option}>Volver al listado de productos</Link>
            </div>
        )
    }

    return (
        <div className={styles.Cart}>
            <h2 className="pt-5">Carrito</h2>
            { cart.map((item, i) => <CartItem key={i} item={item} productsLength={totalQuantity} />) }
            <h2 className="pt-2">
                Total: $ {total.toFixed(2)}
            </h2>
            <button onClick={() => clearCart()} className={styles.emptyCart}>
                Vaciar carrito
            </button>
            <Link to={`/checkout`} className={styles.goToCheckout}>
                Checkout
            </Link>
        </div>
    )
}

export default Cart;