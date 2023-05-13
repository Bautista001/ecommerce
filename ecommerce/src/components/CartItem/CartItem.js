import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)


  if (item.cantidad === 0) {
    removeItem(item)
  }

  return (
    <div className="container pt-5">
      <div className={styles.cartItem}>
        <picture>
          <img src={item.imageId} alt={item.title} className={styles.itemImg} />
        </picture>
        <div>
          <h3 className="">{item.title}</h3>
        </div>
        <div>
          <span className=""><strong>Cantidad:</strong> {item.cantidad}</span>
        </div>

        <span className=""><strong>Precio:</strong> ${item.price}</span>
        <span className=""><strong>Subtotal:</strong> ${item.cantidad * item.price}</span>
        <button onClick={() => removeItem(item.id)} className="">X</button>

      </div>
    </div>
  );
};

export default CartItem