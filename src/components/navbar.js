import { useContext } from 'react';
import {CartContext} from '../contexts/cartContextApi'
import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Cart from './cart'

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
