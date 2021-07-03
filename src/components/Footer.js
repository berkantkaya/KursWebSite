import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
           <span>
               <ul>
                   <li><strong>Community</strong></li>
                   <li>Help Translate</li>
                   <li>Submit an Issue</li>
                   <li>Join our Chat</li>
                   <li>CLA</li>
               </ul>
           </span>
           <span>
               <ul>
                   <li><strong>Network</strong></li>
                   <li>GitHub Repo</li>
                   <li>User Forums</li>
                   <li>1.x Docs</li>
                   <li>0.x Docs</li>
               </ul>
           </span>
           <span>
               <ul>
                   <li><strong>Help Preserve This Project</strong></li>
                   <li>Support for the continued development of Semantic UI comes directly from the community.</li>
                   <li><button className="btn-primary text-white mt-2 ">Donate Today</button></li>
                   
               </ul>
           </span>
           <span>
               <ul>
                   <li><strong>Network</strong></li>
                   <li>GitHub Repo</li>
                   <li>User Forums</li>
                   <li>1.x Docs</li>
                   <li>0.x Docs</li>
               </ul>
           </span>
        </div>
    )
}
