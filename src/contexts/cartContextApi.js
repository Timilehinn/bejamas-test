import React,{ useState, createContext } from 'react'

export const CartContext = createContext();

function CartContextApi(props) {

    // cartItems is an array of every item added to the cart

    const [ cartItems, setCartItems ] = useState([]);
    const [ cartDisplay, setCartDisplay ] = useState('none')
    const allValues = {cartItems, setCartItems, cartDisplay, setCartDisplay }

    return (
        <CartContext.Provider value={allValues} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextApi
