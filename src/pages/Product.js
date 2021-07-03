import React, { useState } from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Products from '../components/Products'


export default function Product() {
    const [modal,setModal]=useState(false)
    const [searchterm,setSearchterm]=useState('')

    return (
        <>
        <Navbar searchterm={searchterm} setSearchterm={(e) => setSearchterm(e)} modal={modal} setModal={setModal}/>
        <div className="product">
          <Products searchterm={searchterm} setSearchterm={setSearchterm}/>
        </div>
        </>
    )
}
