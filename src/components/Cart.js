import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../actions/cartActions'
import './Cart.css'

export default function Cart(props) {
    const dispatch=useDispatch()

    const {item}=props
    const removeFromCartHandler=(id)=>{
      dispatch(removeToCart(id))
    }

    return (
        
            <div  className="addcart">
           <button onClick={()=>removeFromCartHandler(item.id)} className=" carpi"><i class="fas fa-times"></i></button> 
           <p className="paragraf">{item.brand}</p> 
           <p> 
               <span>
               <img src={item.image}/> 
               </span>    
               <span>
               <span> <strong>Hoca: {item.name}</strong></span>
              <span><strong>Fiyat: {item.price} TL</strong></span>
               </span>
            
              
              
           </p>  
           </div>     
        
    )
}



