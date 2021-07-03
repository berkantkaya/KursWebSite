import React from 'react'
import './Navbar.css'


export default function Navbar({modal,setModal,searchterm,setSearchterm}) {
    

    return (
        
        <div className="navbarr">
           <span className="solspan">
             <ul>
                <li  className="logo"><i class="fas fa-bold"></i></li>
                 <li onClick={()=>setModal(modal ? false : true)}><i class="fas fa-bars"></i> Menu</li>
             </ul>
           </span>
           <span className="sagspan">
            <ul>
                <li><i class="fas fa-search"></i><input value={searchterm} onChange={e=>setSearchterm(e.target.value)} className="kucult text-white" type=""text/></li>
                <li><i class="far fa-sun"></i></li>
                <li><i class="fas fa-sign-in-alt"></i></li>
                <li><i class="fas fa-shopping-basket"></i></li>
                <li
                className="kucuk"><i class="fas fa-globe mr-1"></i>
                  Turkish</li>
            </ul>
           </span>
        </div>
    
    )
}
