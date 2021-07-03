import React, { useState } from 'react'
import './Messages.css'

export default function Messages() {
    const [modaliki,setModaliki]=useState(false)
    const [changed,setChanged]=useState('')
    const [message,setMessage]=useState([])
    const addToMessage=(e)=>{
        e.preventDefault();
        if(changed.length !== 0){
            setMessage([...message,changed])
        }
        setChanged('')
    }
    return (
        <div className="genel">
            <div className={modaliki ? "messages" : "messages messageshidden"}>
            <span className="messagesend">
                <input onChange={e=>setChanged(e.target.value)} value={changed} type="area" placeholder="send"/>
                <button onClick={addToMessage} type="submit"><i class="fas fa-plus"></i></button>
            </span>
            <ul>
                <li className="sagmessage">Merhabalar <i class="far fa-smile"></i></li>
                <li className="sagmessage">Size nasıl yardımcı olabilirim <i class="far fa-smile"></i></li>
                {
                    message.map(msg=>{
                        return <li className="solmessage">{msg}</li>
                    })
                }
                
            </ul>
        </div>
         <span onClick={()=>setModaliki(modaliki ? false : true)} className="messagebutton">
             <button><i class="fas fa-comments"></i></button>
         </span>
         </div>
    )
}
