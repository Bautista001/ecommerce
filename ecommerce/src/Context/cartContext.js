import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya está en el carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = cart.reduce(
        (prev, current) => prev + current.stock * current.price,
        0
      );

    const totalQuantity = () => {
        let stock = 0;
        cart.forEach((item) => stock += item.stock)
        return stock;
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;