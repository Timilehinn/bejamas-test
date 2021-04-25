import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import {CartContext} from '../contexts/cartContextApi'
import CartItem from './cartItem.js'
import { FaTimes } from 'react-icons/fa' 
import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Cart = () =>{

    const { cartItems, setCartItems, cartDisplay, setCartDisplay } = useContext(CartContext)
    
    function clearCart(id){
        const filteredtCart = cartItems.filter(item => id !== item.id)
        setCartItems(filteredtCart)
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

export default function Navbar(){

    const { cartItems, cartDisplay, setCartDisplay } = useContext(CartContext)

    function toggleCartDisplay(){
        if(cartDisplay === 'none'){
            setCartDisplay('block')
        }else{
            setCartDisplay('none')
        }
    }
    
    return(
        <>
        <div className={styles.navbar}>
            <img src={logo} alt="bejemas_logo" />
            {/* SHOPPING CART ICON */}
            <span>
                <HiOutlineShoppingCart style={{cursor:'pointer'}} onClick={()=>toggleCartDisplay()} size={35}/>
                    {/* SHOW BADGE WHEN THERE ARE ITEMS IN THE CART */}
                    <span style={{color:'white', visibility:cartItems.length > 0 ? 'visible' : 'hidden' ,fontSize:'.65rem',padding:'.2rem',backgroundColor:'black'}}>
                        {cartItems.length}
                    </span>
            </span>
        </div>

        {/* CART */}
         <Cart/>
        </>
    )
}
