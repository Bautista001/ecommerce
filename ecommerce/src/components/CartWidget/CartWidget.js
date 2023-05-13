import cart from './assets/cart.svg';
import styles from "./CartWidget.module.css";
import { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='cart' className={styles.cartWidget}>
          <img src={cart} alt="cart-widget" /> 
          <p> {totalQuantity()} </p>
        </Link> 
    )
};

export default CartWidget;