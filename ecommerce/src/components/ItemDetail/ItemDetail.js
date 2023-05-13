import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/itemCount";
import { useContext, useState } from "react"
import styles from "./ItemDetail.module.css";
import { CartContext } from "../../Context/cartContext"; 

const ItemDetail = ({id, title, imageId, categoryId, description, price, stock }) => {
    const [qtyAdded, setQtyAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setQtyAdded(cantidad)

        const item = {
            id, title, price
        }

        addItem(item, cantidad)
    }

    return(
        <article className="container d-flex align-items-center mt-5">
            <picture>
                <img src={imageId} alt={title} className={styles.itemImg} />
            </picture>
            <section className={styles.itemDetails}>
                <h2 className="ItemHeader">
                    {title}
                </h2>
                <p className={styles.info}>
                    Categoría: {categoryId}
                </p>
                <p className={styles.info}>
                    {description}
                </p>
                <p className={styles.info}>
                    Precio: ${price}
                </p>
                <footer className={styles.itemFooter}>
                    {
                        qtyAdded > 0 ? (
                            <Link to='/cart'><button className="">Finalizar compra</button> </Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                    <Link to='/'><button className="">Seguir comprando</button></Link>
                </footer>
            </section>
        </article>
    )
}

export default ItemDetail;