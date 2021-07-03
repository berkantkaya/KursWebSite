import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../actions/productActions';
import './Filtreleme.css'

export default function Filtreleme() {
    const productList=useSelector(state=>state.productList)
    const {size,sort,items,filteredItems}=productList;
    console.log(size)
    const dispatch=useDispatch()
    return (
        <div className="filtreleme">
            <h5>Filtreleme</h5>
           <span>
               <ul>
                   <li><strong>Konu</strong></li>
                   <li><input value="GraphQL" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>GraphQL</li>
                   <li><input value="React" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>React</li>
                   <li><input value="HTML5" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>HTML5</li>
                   <li><input value="Bootstrap" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>Bootstrap</li>
                   <li><input value="git" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>git</li>
                   <li><input value="" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} type="checkbox"/>All</li>
                   
               </ul>
           </span>
           <span>
           <ul>
                   <li><strong>Seviye</strong></li>
                   <li><input type="checkbox"/>Tüm Düzeyler</li>
                   <li><input type="checkbox"/>Başlangıç</li>
                   <li><input type="checkbox"/>Orta</li>
                   <li><input type="checkbox"/>Uzman</li>
               </ul>
           </span>
           <span>
           <ul>
                   <li><strong>Süre</strong></li>
                   <li><input type="checkbox"/>0-2 saat</li>
                   <li><input type="checkbox"/>3-6 saat</li>
                   <li><input type="checkbox"/>7-16 saat</li>
                   <li><input type="checkbox"/>17+ saat</li>
               </ul>
           </span>
           <span>
               <ul>
                   <li><strong>Konu</strong></li>
                   <li><input type="checkbox"/>NodeJs</li>
                   <li><input type="checkbox"/>ReactJs</li>
                   <li><input type="checkbox"/>React Native</li>
                   <li><input type="checkbox"/>Javascript</li>
                   <li><input type="checkbox"/>Html-Css</li>
                   <li><input type="checkbox"/>C++</li>
                   
               </ul>
           </span>
           
        </div>
    )
}
