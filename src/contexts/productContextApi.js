import React,{ useState, useEffect, createContext } from 'react'
import db from '../utils/database.js'

export const ProductContext = createContext();

function ProductContextApi(props) {

    /*
    allProducts is an array of every data gotten from the database.
    products contains filtered 'allProducsts array, loaded to the front end in little chunk' 
    since loading all products will lead to performance issues.
    After each filter or sort action, products array is loaded with new data and passed on to the 
    pagination function for pagination.
     */
    const [ products, setProducts ] = useState([])
    const [ allProducts, setAllProducts ] = useState([])
    const [ category, setCategories ] = useState([])  //an array of every chosen category
    const [ categoryToggle, setCategoryToggle ] = useState('none'); //display for mobile devices


    const allValues = {products, setProducts, allProducts, setAllProducts, category, setCategories, categoryToggle, setCategoryToggle }
    useEffect(()=>{
        setAllProducts(db.products)
        setProducts(db.products)
        function paginationDefault(){
            const page = 1
            const limit = 6
            const startIndex = (page - 1) * limit
            const endIndex = page * limit
            const pagResults = {}
    
            if(startIndex > 0){
                pagResults.prev = {
                    page: parseInt(page) - 1,
                    limit: parseInt(limit)
                }
            }
                
            if(endIndex < allProducts.length){
                pagResults.next = {
                    page: parseInt(page) + 1,
                    limit: parseInt(limit)
                }           
            }
            pagResults.data = db.products.slice(startIndex,endIndex)
            setProducts(pagResults.data)
        }
        paginationDefault()
    },[allProducts.length])

    return (
        <ProductContext.Provider value={allValues} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextApi;
