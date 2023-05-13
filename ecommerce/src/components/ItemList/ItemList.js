import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({products}) => {
    
    if (products.length === 0) {
        return(
            <div>No tenemos productos por el momento</div>
        )
    }
    return(
        <div className={styles.listGroup}>
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;