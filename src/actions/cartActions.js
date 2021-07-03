import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productId) => async (dispatch, getState) => {

  const { data } = await axios.get(`/api/products/${productId}`);
  console.log(data)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      image: data.image,
      brand: data.brand,
      name: data.name,
      price: data.price,
      id: data._id,
    },
  });
};

export const removeToCart=(productId)=>async (dispatch,getState)=>{
  dispatch({
    type:CART_REMOVE_ITEM,payload:productId
  })
  
}