import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/itemCount";
import { useContext, useState } from "react"
import styles from "./ItemDetail.module.css";
import { CartContext } from "../../Context/cartContext";

const ItemDetail = ({ id, title, imageId, categoryId, description, price, stock }) => {
    const [qtyAdded, setQtyAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setQtyAdded(cantidad)

        const item = {
            id, title, price, imageId
        }

        addItem(item, cantidad)
    }

    return (
        <div className="container my-5">
            <p className={styles.breadcrumb}>
                <Link to={`/category/${categoryId}`}>
                    {categoryId}
                </Link> 
                > {title}
            </p>
            <article className="d-flex">
                <picture>
                    <img src={imageId} alt={title} className={styles.itemImg} />
                </picture>
                <section className={styles.itemDetails}>
                    <h2 className="ItemHeader">
                        {title}
                    </h2>
                    <h5 className={styles.info}>
                        Precio: ${price}
                    </h5>
                    <footer className={styles.itemFooter}>
                        {
                            qtyAdded > 0 ? (
                                <Link to='/cart'><button className="btn btn-success">Finalizar compra</button> </Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                        <Link to='/'><button className="btn btn-secondary">Seguir comprando</button></Link>
                    </footer>
                </section>
            </article>
            <h2>Descripción</h2>
            <p className={styles.info}>
                {description}
            </p>
        </div>
    )
}

export default ItemDetail;