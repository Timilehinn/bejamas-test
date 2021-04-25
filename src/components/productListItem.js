import React, { useState, useContext } from 'react'
import {CartContext} from '../contexts/cartContextApi'
import styles from '../styles/productlistitem.module.css'
import LazyImage from '../utils/lazyImg'

function ProductListItem(prop) {

    const { setCartItems, setCartDisplay } = useContext(CartContext)
    const [ cartBtn, showCartBtn ] = useState('none')
    const _prop = prop

    function showAddToCartBtn(){
        showCartBtn('block')
    }
    function hideAddToCartBtn(){
        showCartBtn('none')
    }
    function addItemToCart(){
        setCartItems((prevItems)=>{
            return [...prevItems,{id:_prop.id, image:_prop.image, name:_prop.name,price:_prop.price}]
        })
    }

    return (
        <div className={styles.main} onMouseOver={showAddToCartBtn} onMouseDown={showAddToCartBtn} onMouseLeave={hideAddToCartBtn} >
                {prop.bestseller ? (
                    <div className={styles.productTag} >
                        <p>Best Seller </p>
                    </div>
                ):(
                    <></>
                )
                }
            <LazyImage src={prop.image} />
            <p style={{color:'grey',fontSize:'.7rem',lineHeight:'5px'}}>{prop.category}</p>
            <h3 style={{margin:'0px',display:'flex',alignItems:'center'}}>{prop.name}</h3>
            <p style={{color:'grey',margin:'1px'}}>${prop.price}</p>
            <button onClick={()=>{addItemToCart(); setCartDisplay('block')}} style={{width:'100%',zIndex:1, cursor:'pointer', padding:'.5rem',backgroundColor:'black',color:"white",border:'1px solid black',position:'relative',top:'-105px',display:cartBtn}}>Add to cart</button>
        </div>
    )
}

export default ProductListItem;
// {prop.bestseller ? <span style={{fontStyle:'italic',fontSize:'.7rem',color:'grey',borderRadius:'.2rem',backgroundColor:'lightgrey',padding:'.2rem'}}><FaStar/>bestseller</span> : <></>}