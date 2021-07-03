import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_SORT, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducers=(state={products:[],loading:true},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST :
            return {loading:true}
        case PRODUCT_LIST_SUCCESS : 
        return {
            loading:false, products:action.payload,filteredItems: action.payload,items: action.payload
        }
        case PRODUCT_LIST_FAIL : 
        return {
            loading:false, error:action.payload
        }
        case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_SORT:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
        default :
        return state;
    }
}

export const productDetailReducers=(state={product:[],loading:true},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST :
            return {loading:true}
        case PRODUCT_DETAILS_SUCCESS : 
        return {
            loading:false, product:action.payload
        }
        case PRODUCT_DETAILS_FAIL: 
        return {
            loading:false, error:action.payload
        }
        default :
        return state;
    }
}