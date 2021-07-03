import React from 'react'
import './Uclu.css'

export default function Uclu() {
    return (
        <div className="uclu">
        <span>
            <img src="https://semantic-ui.com/images/icons/paint.png" />
             <h3>3000+ Theming Variables</h3>
             <p>The only dogma from this framework: everything arbitrary is mutable.</p>
             <button>Theming Guide</button>
        </span>
        <span>
            <img src="https://semantic-ui.com/images/icons/lab.png" />
             <h3>5000+ Commits</h3>
             <p>Semantic UI is a free open source project already used in multiple large scale production environments.</p>
             <button>Visit Github</button>
        </span>
        <span>
            <img src="https://semantic-ui.com/images/icons/book.png" />
             <h3>50+ UI Components</h3>
             <p>Build your entire site with one UI stack. Share your UI between multiple projects.</p>
             <button>Browse UI</button>
        </span>
        </div>
    )
}
