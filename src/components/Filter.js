import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';
import './Filter.css'
export default function Filter() {
    const productList=useSelector(state=>state.productList)
    const {size,sort,items,filteredItems}=productList;
    console.log(size)
    const dispatch=useDispatch()
    return (
        
        <div className="filter">
            <span><strong>14 ürün mevcut</strong></span>
           <span>
               <span>
            SORT: <select value={sort} onChange={(e)=>dispatch(sortProducts(filteredItems,e.target.value))} >

           <option>Latest</option>
           <option>Lowest</option>
           <option>Highest</option>
            </select>
            </span>
           
            NAME: <select value={size} onChange={(e)=>dispatch(filterProducts(items,e.target.value))} >
           <option value="">All</option>
           <option value="GraphQL">GraphQL</option>
           <option value="HTML5">HTML5</option>
           <option value="React">React</option>
           <option value="Bootstrap">Bootstrap</option>
           <option value="git">git</option>
            </select>
            </span>
        </div>
    )
}
