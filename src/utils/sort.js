import React, { useState, useContext } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import {ProductContext} from '../contexts/productContextApi'

function Sort() {

    
    const [ sortValue, setSortValue ] = useState('ALPH'); // sets sort state to either 'alphabetically' or 'by price'
    const { products, setProducts, allProducts } = useContext(ProductContext)
    const [ arrUpActiveColor, setArrUpActiveColor ] = useState('grey')
    const [ arrDwnActiveColor, setArrDwnActiveColor ] = useState('grey')

    // sorts by ascending order
    const sortOne=()=>{
        setArrDwnActiveColor('grey'); setArrUpActiveColor('black') //to toggle active arrow color
        const sort_value = sortValue; // 'ALPH, PRICE, ''
        switch (sort_value){
            case 'ALPH':
                const sort_by_alph = allProducts.sort((a,b)=>{
                    var t1 = a.name.toLowerCase();
                    var t2 = b.name.toLowerCase();
                    return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
                })
                setProducts(sort_by_alph.slice(0,6));
                console.log(sort_by_alph)
                break;
            case 'PRICE':
                const sort_by_price = allProducts.sort((a,b)=>{
                    var t1 = parseInt(a.price);
                    var t2 = parseInt(b.price);
                    return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
                })
                setProducts(sort_by_price.slice(0,6));
                break;
            default:
                console.log('')
        }
    }

    // sorts by descending order
    const sortTwo=()=>{
        setArrDwnActiveColor('black'); setArrUpActiveColor('grey') //to toggle active arrow color
        const sort_value = sortValue; // 'ALPH, PRICE, ''
        switch (sort_value){
            case 'ALPH':
                const sort_by_alph = allProducts.sort((a,b)=>{
                    var t1 = a.name.toLowerCase();
                    var t2 = b.name.toLowerCase();
                    return (t1 > t2) ? -1 : (t1 < t2) ? 1 : 0;
                })
                setProducts(sort_by_alph.slice(0,6));
                console.log(products)
                break;
            case 'PRICE':
                const sort_by_price = allProducts.sort((a,b)=>{
                    var t1 = parseInt(a.price);
                    var t2 = parseInt(b.price);
                    return (t1 > t2) ? -1 : (t1 < t2) ? 1 : 0;
                })
                setProducts(sort_by_price.slice(0,6));
                break;
            default:
                console.log('')
        }
    }


    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <span style={{margin:'1rem'}}>
                <FaArrowUp color={arrUpActiveColor} style={{cursor:'pointer'}} onClick={()=>sortOne()} />
                <FaArrowDown color={arrDwnActiveColor} style={{cursor:'pointer'}} onClick={()=>sortTwo()} />
            </span>
            <p style={{fontWeight:'bold',color:'grey'}}>Sort by</p>
            <select 
                onChange={e=>setSortValue(e.target.value)} 
                style={{
                    fontWeight:'bold',
                    cursor:'pointer', 
                    outline:'none',
                    fontSize:'1.2rem',
                    border:'0px',
                    backgroundColor:'white'
                }}>
                <option value="ALPH"  >Name</option>
                <option value="PRICE" >Price</option>
            </select>
            
        </div>
    )
}

export default Sort
