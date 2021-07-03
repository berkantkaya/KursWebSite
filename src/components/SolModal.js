import React from 'react'
import './Logo.css'

export default function SolModal({modal,setModal}) {
    return (
        <div className={modal ? "col-lg-3 modals" : "col-lg-3 modals modalss"}>
        <ul>
            <li><strong className="text-white">İçerik</strong></li>
            <li><i class="fab fa-node"></i> NodeJs</li>
            <li><i class="fab fa-react"></i> ReactJs</li>
            <li><i class="fab fa-html5"></i> Html-Css</li>
            <li><i class="fab fa-node-js"></i> Javascript</li>
            <li><i class="fab fa-reacteurope"></i> React-Native</li>
            <li><strong className="text-white">Örnekler</strong></li>
            <li><i class="fas fa-arrow-up"></i> React-Sayaç</li>
            <li><i class="fas fa-comments"></i> React-Messages</li>
            <li><i class="fas fa-envelope-open-text"></i>React-modal</li>
            <li><i class="fas fa-palette"></i> React-Color</li>
            <li><i class="fas fa-calculator"></i> Calculator</li>
            <li><i class="fas fa-gamepad"></i> Tic-Tac-Toe</li>
            <li><i class="fas fa-cart-plus"></i> Add-Cart</li>
            <li><i class="fas fa-calendar-week"></i> Detail Pages</li>
            <li><i class="fas fa-filter"></i> Search-Filter</li>
            <li><i class="fas fa-sort-amount-up-alt"></i> Sorting-App</li>
            <li><strong className="text-white">Kurslar</strong></li>
            <li>İçerikler</li>
            <li>Fiyatlandırma</li>
            <li>Detaylandırma</li>
            <li>Kaynaklar</li>
            <li><strong className="text-white">Örnekler</strong></li>
            <li><i class="fas fa-arrow-up"></i> React-Sayaç</li>
            <li><i class="fas fa-comments"></i> React-Messages</li>
            <li><i class="fas fa-envelope-open-text"></i>React-modal</li>
            <li><i class="fas fa-palette"></i> React-Color</li>
        </ul>
    </div>
    )
}
