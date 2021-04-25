// photo of the day...
import React, { useContext, useState } from 'react'
import UW from '../images/ubuntuwall.jpg'
import {CartContext} from '../contexts/cartContextApi'
import {ProductContext} from '../contexts/productContextApi'
import ProductListItem from './productListItem.js'
import Category from '../utils/category'
import PriceRange from '../utils/priceRange'
import styles from '../styles/main.module.css'
import db from '../utils/database.js'
import { FaCaretRight, FaCaretLeft, FaSlidersH } from 'react-icons/fa'
import Sort from '../utils/sort'
import { useMediaQuery } from 'react-responsive'


function CategoryBoxMobile(){
    const isMobileScreen = useMediaQuery({
        query: '(min-width: 0px) and (max-width: 767px)'
    })
    const { categoryToggle, setCategoryToggle } = useContext(ProductContext)
    
    return(
        <div style={{display:categoryToggle}} className={styles.categoryBox}>
            <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                <h3>Filter</h3>
                <span onClick={()=>setCategoryToggle('none')} style={{fontWeight:'bold',fontSize:'1.5rem'}}>x</span>
            </div>
            <Category name="People" value="people" />
            <Category name="Premium" value="premium" />
            <Category name="Pets" value="pet" />
            <Category name="Food" value="food" />
            <Category name="Landmarks" value="landmarks" />
            <Category name="Cities" value="cities" />
            <Category name="Nature" value="nature" />

            {/* line inbetween */}
            <div style={{width:'80%',marginTop:'1rem',marginBottom:'1rem',height:'2px',backgroundColor:'lightgray'}}></div>
            {/* line inbetween */}
            
            <h3>Price range</h3>
            <PriceRange desc="Lower than $20" patch="LW20" />
            <PriceRange desc="$20 - $100" patch="BTW20_100"  />
            <PriceRange desc="$100 - $200" patch="BTW100_200"  />
            <PriceRange desc="More than $200" patch="MT200" />

            {isMobileScreen ? (
            <div className={styles.categoryBoxMobileBtn}>
            {/* once checbock is click it filters/sort already */}
                <button onClick={()=>window.location.reload()}  style={{backgroundColor:'white',color:'black'}}>CLEAR</button>
                <button onClick={()=>setCategoryToggle('none')} style={{backgroundColor:'black',color:'white'}}>SAVE</button>
            </div>
            ):(
                <div></div>
            )}
        </div>
    )
}

function RelatedImages(prop){
    return (
        <img
            src={prop.image}
            alt=""
            style={{
                width:'33%',
                height:'150px',
                backgroundColor:'lightgrey',
                margin:'.5rem'
            }} />
    )
}

function Main() {
    const { setCartItems, setCartDisplay } = useContext(CartContext)
    const { products, setProducts, allProducts, category, setCategoryToggle } = useContext(ProductContext)
    const [pages, setPages] = useState([])
    const [ fakePage, setFakePage ] = useState('block')
    const [ nextBtnDisp, setNextBtnDisp ] = useState('none')
    const [ prevBtnDisp, setPrevBtnDisp ] = useState('none')
    var found = db.products.filter(product=>product.featured === true)

    const mainphoto = {
        id:'22',
        image:UW,
        name:'Ubuntu Wallapaper',
        price:'1000'
    }

    

    function addToCart(){
        setCartItems((prevItems)=>{
            return [...prevItems,{id:mainphoto.id, image:mainphoto.image, name:mainphoto.name,price:mainphoto.price}]
        })
    };




    function pagination(det){
        const page = det
        const limit = 6
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const pagResults = {}
        if(startIndex > 0){
            pagResults.prev = {
                page: parseInt(page) - 1,
                limit: parseInt(limit)
            }
            setPrevBtnDisp('block')
        }else{
            setPrevBtnDisp('none')
        }
            
        if(endIndex < allProducts.length){
            pagResults.next = {
                page: parseInt(page) + 1,
                limit: parseInt(limit)
            }           
            setNextBtnDisp('block')
        }else{
            setNextBtnDisp('none')
        }
        pagResults.data = allProducts.slice(startIndex,endIndex)
        setProducts(pagResults.data)
        setPages(pagResults)
    }

    return (
        // main photo
        <div className={styles.maindiv}>
            {/* photo of the day header(title, 'add to cart button') */}
            <div className={styles.mainPhotoHeader}>
                <h2>{found[0].name}</h2>
                {/* displayed on large screens */}
                <button 
                    onClick={()=>{addToCart(); setCartDisplay('block')}}
                    className={styles.addToCartLarge}>ADD TO CART</button>
            </div>

            {/* Section containing the main photo and description and product list */}
            <div>
                {/* main photo */}
                <div className={styles.featuredPhoto} style={{ backgroundImage:`url(${found[0].image.src})`}}>
                    <div className={styles.featuredTag}>
                        <p>Photo of the day</p>
                    </div>
                </div>
                {/* displayed on mobile screens only */}
                <button 
                    onClick={()=>{addToCart(); setCartDisplay('block')}}
                    className={styles.addToCartMobile}>ADD TO CART</button>
                {/* div for decription and related photos(other photos),
                    aligned side by side on large screens
                 */}
                <div className={styles.desc}>
                    {/* side 1 */}
                    <div className={styles.desc_row1}>
                        <h2>About {found[0].name}</h2> 
                        <p style={{fontWeight:'bold',fontSize:'1.3rem',color:'grey',textTransform:'capitalize'}}>{found[0].category}</p>
                        <p style={{fontSize:'1rem',color:'grey'}}>{found[0].details.description}</p>
                    </div>
                    {/* side 2 */}
                    <div className={styles.desc_row2}>
                        <h3>People also buy</h3>
                        <div>
                            <RelatedImages image={db.products[7].image.src} />
                            <RelatedImages image={db.products[8].image.src} />
                            <RelatedImages image={db.products[11].image.src} />
                        </div>
                        <h3>Details</h3>
                        <p style={{margin:'0',fontSize:'.8rem',color:'grey'}}>Size: {found[0].details.dimensions.width} x  {found[0].details.dimensions.height}</p>
                        {/* size will be conditionally rendered based on its length to show mb or kb */}
                        <p style={{fontSize:'.8rem',color:'grey'}}>Size: {found[0].details.size.substring(0,2)}mb</p> 
                    </div>
                </div>
                {/* PRODUCT LIST */}
                <div className={styles.productlist}>

                    {/* hidden on large screens */}
                    <FaSlidersH size={25} onClick={()=>setCategoryToggle('flex')} className={styles.categoryicon} />
                    {/* displayed on mobile/tab screens */}
                    <CategoryBoxMobile />

                    {/* displayed on large screens */}
                    <div className={styles.categoryBox}>
                        <h3 onClick={()=>alert(category)}>Category</h3>
                        <Category name="People" value="people" />
                        <Category name="Premium" value="premium" />
                        <Category name="Pets" value="pet" />
                        <Category name="Food" value="food" />
                        <Category name="Landmarks" value="landmarks" />
                        <Category name="Cities" value="cities" />
                        <Category name="Nature" value="nature" />

                        {/* line inbetween */}
                        <div style={{width:'80%',marginTop:'1rem',marginBottom:'1rem',height:'2px',backgroundColor:'lightgray'}}></div>
                        {/* line inbetween */}
                        
                        <h3>Price range</h3>
                        <PriceRange desc="Lower than $20" patch="LW20" />
                        <PriceRange desc="$20 - $100" patch="BTW20_100"  />
                        <PriceRange desc="$100 - $200" patch="BTW100_200"  />
                        <PriceRange desc="More than $200" patch="MT200" />
                    </div>

                    {/* product list item section */}
                    <div className={styles.productDiv}>
                        <Sort />
                        <div className={styles.prodlistitem}>
                        {products.map(product=>(
                            <ProductListItem key={product.id} id={product.id} image={product.image.src} category={product.category} name= {product.name} price={product.price} bestseller={product.bestseller} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <p>{pag}</p> */}
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                {/* prev arrow */}
                <button style={{backgroundColor:'transparent',cursor:'pointer', display:prevBtnDisp, border:'0px',}} onClick={()=>pagination(pages.prev.page)}>
                    <FaCaretLeft size={30}/>
                </button>

                {/* this is the cindex of the current page (disabled) */}
                <button disabled={true} style={{color:'grey',fontSize:'20px',fontWeight:'bold', backgroundColor:'transparent', border:'0px'}}>{pages.prev ? pages.prev.page + 1 : '1'}</button>
                {/* this is button starts the pagination by calculating the next 6 images by an offset of the size of the  (6)first set of images */}
                <button style={{backgroundColor:'transparent',fontSize:'20px', fontWeight:'bold', display:fakePage, border:'0px'}} onClick={()=>{pagination(2);setFakePage('none')}}>{2}</button>

                {/* next arrow */}
                <button style={{backgroundColor:'transparent',cursor:'pointer',display:nextBtnDisp, border:'0px'}} onClick={()=>pagination(pages.next.page)}>
                    <FaCaretRight size={30} />
                </button>
            </div>
      </div>
    )
}

export default Main;
