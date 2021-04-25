import React, { useContext } from 'react';
import {ProductContext} from '../contexts/productContextApi'


export function CategoryMobile(){
    return(
        <div>cat mobile</div>
    )
}

function Category(prop) {

    const { setProducts, allProducts, category, setCategories } = useContext(ProductContext)
    const _prop = prop

    //  all prouducts that match each category is added into this array
    const found = []

    const findCategoryMatch = () => {
        var newArr = category.filter(cat => !cat.includes(_prop.value)) // this removes duplicates from the category array
        setCategories([...newArr,_prop.value]) //then sets the category to the filtered one
        category.forEach( c => { // for each category found in products, it sets new 'grouped' set of products
            var flt = allProducts.filter(prod => prod.category.includes(c))
            found.unshift(...flt);
            setProducts(found.slice(0,6)) // sets default limit
        })
    }


    return (
        <label style={{fontSize:'.85rem',display:'flex',alignItems:'center'}}>
                <input type="checkbox"
                onClick={()=>findCategoryMatch()}
                 style={{
                     width:'20px',
                     height:'20px',
                     margin:'.6rem',
                     border:'1px solid black'
                }} />
            {prop.name}
        </label>                  
    )
}

export default Category;



