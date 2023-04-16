import Item from '../Item/Item';

const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;