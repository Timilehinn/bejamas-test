import React from 'react'
import styles from '../styles/cartItem.module.css'

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

export default CartItem;
