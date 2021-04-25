import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import {CartContext} from '../contexts/cartContextApi'
import { FaTimes } from 'react-icons/fa' 
import styles from '../styles/cart.module.css'


function CartItem(prop) {
    return (
        <div className={styles.main}>
            {/* aligned side by side in rows */}
            {/* side 1 */}
            <div>
                <p className={styles.p_name}>{prop.name}</p>
                <p className={styles.p_price}>${prop.price}</p>
            </div>
            {/* side 2 */}
            <img className={styles.preview_img} alt="" src={prop.image}/>
        </div>
    )
}





const Cart = () =>{

    const { cartItems, setCartItems, cartDisplay, setCartDisplay } = useContext(CartContext)
    
    function clearCart(id){
        const filteredtCart = cartItems.filter(item => id !== item.id)
        setCartItems(filteredtCart)
        if(filteredtCart.length < 1 ){
            setCartDisplay('none')
        }
    }
    return(
        <div className={styles.cart} style={{display:cartDisplay}}>
            <FaTimes color="black" onClick={()=>setCartDisplay('none')} style={{position:'absolute',right:'1vw'}} /><br/>
                {cartItems.length > 0 ? (
                    cartItems.map(item=>(
                        <div> 
                            <CartItem id={item.id} name={item.name} image={item.image} price={item.price} />
                            <button 
                                className={styles.removeItemBtn} 
                                onClick={()=>clearCart(item.id)}>CLEAR</button>  
                        </div>
                    ))
                ):(
                    /* DISPLAYED WHEN CART IS EMPTY */ 
                    <div 
                        style={{
                            display:'flex',
                            flexDirection:"column",
                            justifyContent:'center',
                            alignItems:'center'}}>
                        <FaShoppingCart size={100} color="lightgrey" />
                        <p style={{color:'grey'}}>Cart is Empty</p>
                    </div> 
                )}
                {/* clear cart items */}
                {
                    cartItems.length > 2 ? (
                        <button 
                            className={styles.clearCartBtn} 
                            onClick={()=>{setCartItems([]); setCartDisplay('none')}}>CLEAR ALL</button>
                    ):(
                        <></>
                    )
                }
        </div>
    )
}
export default Cart;