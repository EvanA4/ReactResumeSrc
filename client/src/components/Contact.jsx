import { useState } from 'react';

import './styles/Contact.css'

export default function Contact() {
    const [showEmail, setShowEmail] = useState(0);
    const emailStates = ['tip', 'showTip', 'hideTip'];

    return (
        <div className='contact' id='Contact'>
            <span className='experienceAnchor'></span>
            <div className='contactHeader'>
                <div className='broadBorder'></div>
                <span className='header'>
                    <span>Contact</span>
                    <div className='cancelBorder'></div>
                </span>
                <span className='email' id={emailStates[showEmail]} >evanabbott04@gmail.com</span>
            </div>
            <div className='contactList'>
                <a id="github" href="https://github.com/EvanA4"><img src="/github.svg"/></a>
                <a id="linkedin" href="https://www.linkedin.com/in/evan-abbott-667167214/"><img src="/linkedin.svg"/></a>
                <button onClick={() => setShowEmail(showEmail % 2 == 0 ? 1 : 2)}><img src="/gmail.svg"/></button>
            </div>
        </div>
    );
}