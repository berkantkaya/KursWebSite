import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import SolModal from './SolModal'

export default function ({modal,setModal}) {
    return (
        <div className="logoo">
            <div className="row">
                <SolModal modal={modal} setModal={setModal}/>
                <div className="col-lg-9 baslik">
                    <h1>Bekahabu UI</h1>
                    <h3>User Interface is the language of the web</h3>
                    <span>
                       <Link to="/product">
                       <button>Get Started</button>
                       </Link> 
                        <button>New in 2.4</button>
                    </span>
                </div>
            </div>
        </div>
    )
}
