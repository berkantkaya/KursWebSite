import axios from "axios"
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_SORT, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = ()=>async(dispatch)=>{
    dispatch({type:PRODUCT_LIST_REQUEST})
    try{
       const {data}=await axios.get('/api/products')
       dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})
    }
}

export const detailProducts = (productId)=>async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId})
    try{
       const {data}=await axios.get(`/api/products/${productId}`)
       dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}
export const filterProducts=(products,size)=>(dispatch)=>{
    dispatch({
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            items:size === " " ?  products : products.filter(x=>x.brand.indexOf(size)>=0)
        }
    })
}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "Latest") {
      sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
      sortedProducts.sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : a.price > b.price
          ? -1
          : 1
      );
    }
    console.log(sortedProducts);
    dispatch({
      type: ORDER_PRODUCTS_BY_SORT,
      payload: {
        sort: sort,
        items: sortedProducts,
      },
    });
  };