import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({id, title, imageId, price, stock}) => {

    return (
        <article className={styles.cardItem}>
            <Link to={`/item/${id}`}>
                <picture>
                    <img src={imageId} alt={title} className="itemImg" />
                </picture>
            </Link>
            <section className="m-2">
                <h4 className="itemHeader">
                    {title}
                </h4>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Stock: {stock}
                </p>
            </section>
            <footer className={styles.itemBuy}>
                <Link to={`/item/${id}`} className="option"> Comprar </Link>
            </footer>
        </article>
    )
}

export default Item;