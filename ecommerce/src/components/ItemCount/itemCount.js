import styles from "./ItemCount.module.css";
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial);
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className={styles.itemCounter}>
            <div className={styles.itemControls}>
                <button className="btn" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="btn" onClick={increment}>+</button>
            </div>
            <div className={styles.itemAddtocart}>
                <button className="btn btn-success" onClick={()=>onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;