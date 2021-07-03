import React, { useState } from 'react'
import './Productsag.css'
import {Rating} from '@material-ui/lab'
import { Link } from 'react-router-dom';


export default function Productsag(props) {
    const {dt} =props;
    const [kalp,setKalp]=useState(false);

    return (
        <>
        <div className={kalp ? "productsag borred" : "productsag"} >
            
           <span>
            <Link to={`/detail/${dt._id}`}>
             <img src={dt.image}/>
           </Link>

           </span>
           <span className="spaniki">
             <strong>{dt.brand}</strong>
             <p>NodeJs ile GSM Tabanlı Konum Takip Proje Tasarımı NodeJs ile GSM Tabanlı Konum Takip Proje Tasarımı</p>
             <p>Berkant Kaya</p>
             <p className="ringg"><Rating className="mt-1" name="size-small" defaultValue={5} size="small" /></p>
             <p className="ringgg">Toplam 10 saat - {dt.yorum} ders</p>
           </span>
           
           <span className=" ml-4 buyutmek">
               <strong>{dt.price} TL</strong>
               <strong className={kalp ? "text-danger" : "text-dark"} onClick={()=>setKalp(kalp ? false : true)}><i class="far fa-heart"></i></strong>
           </span>
        </div>
        </>
    )
}
