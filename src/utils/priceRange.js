import React,{ useContext } from 'react'
import {ProductContext} from '../contexts/productContextApi'


function PriceRange(prop) {

    const { products, setProducts, allProducts } = useContext(ProductContext)
   
    // disable selection of multiple checkboxes
    function selectOnlyThis(id){
        var myCheckbox = document.getElementsByClassName("checkr");
        Array.prototype.forEach.call(myCheckbox,function(el){
            el.checked = false;
        });
        id.target.checked = true;
      }

    function priceRangeFilter(e){
        // i used 'patch' to create a short identifier for each price range type
        const patch = prop.patch
        switch (patch) {
            case 'LW20':
                setProducts(allProducts.filter(product => parseInt(product.price) < 20));
                console.log(products)
                break;
            case 'BTW20_100':
                setProducts(allProducts.filter(product=> product.price > 20 && product.price < 100 ))
                console.log(products)
                
                break;
            case 'BTW100_200':
                setProducts(allProducts.filter(product=> product.price > 100 && product.price < 200 ))
                console.log(products)
                
                break;
            case 'MT200':
                setProducts(allProducts.filter(product=> product.price > 200 ))
                console.log(products)
                
                break;
            default:
                console.log('nothing')
        }
    }

    return (
            <label 
                 style={{fontSize:'.85rem',display:'flex',alignItems:'center'}}>
                <input type="checkbox"
                className="checkr"
                onChange={(e)=>{priceRangeFilter(); selectOnlyThis(e)}} 
                value={prop.patch}
                 style={{
                     width:'20px',
                     height:'20px',
                     margin:'.6rem',
                     border:'1px solid black'
                }} />{prop.desc}
            </label>
    )
}

export default PriceRange
