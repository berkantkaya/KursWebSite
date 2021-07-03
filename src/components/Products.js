import React, { useEffect, useState } from 'react'
import Filtreleme from './Filtreleme'
import Logo from './Logo'
import './Products.css'
import Productsag from './Productsag'
import axios from 'axios'
import LoadingBox from './LoadingBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Filter from './Filter'

export default function Products({searchterm,setSearchterm}) {
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {loading,error,filteredItems}=productList;
   



    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])

    return (
        <div className="products ">
            <Filter/>
            <div className="row ml-auto">
                <div className="col-2 kaplama">
                   <Filtreleme/>
                </div>
                <div className="col-9 kapla">
                    {loading ? (<LoadingBox/>) : (filteredItems.filter(dt=>{
                        console.log('hopp',dt)
                        if(!searchterm){
                            return dt
                        }else if(dt.brand.toLowerCase().includes(searchterm.toLowerCase())){
                            return dt
                        }
                    }).map(dt=>{
                   return (<Productsag key={dt._id} dt={dt}/>)     
                    }))}
                </div>
            </div>
        </div>
    )
}
