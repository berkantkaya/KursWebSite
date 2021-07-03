import React, { useState } from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Resim from '../components/Resim'
import Tekli from '../components/Tekli'
import Uclu from '../components/Uclu'

import './Home.css'


export default function Home() {
    const [modal,setModal]=useState(false)

    return (
        <div className="home">
        <Navbar modal={modal} setModal={setModal}/>
        <Logo modal={modal} setModal={setModal}/>
        <Resim/>
        <Uclu/>
        <Tekli/>
        </div>
    )
}
