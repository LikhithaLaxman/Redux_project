import React,{useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {setProduct} from '../Redux/Actions/Product'
import ProductComponent from './ProductComponent'

function ProductListing() {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()
    const fetchProduct=async()=>{
        const response= await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>console.log('err',err))
        dispatch(setProduct(response.data))
    }

    useEffect(()=>{
       
        fetchProduct();
    },[])
    console.log("products",products)
  return (
    <div className='ui grid container'>
   <ProductComponent/>
    </div>
  )
}

export default ProductListing
