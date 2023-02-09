import React, { useState } from 'react'
import './navbar.css'
import menu from './menu.png';
import {
    Link
} from 'react-router-dom';

export default function Navbar(props) {
    const [height, setHeight] = useState('0px')
    const [display, setDisplay] = useState('none')
    const handleNavbar = () => {
        if (height === '0px') {
            setHeight('210px')
            setDisplay('block')
        }
        else {
            setHeight('0px')
            setDisplay('none')
        }

    }
    return (
        <header>
        <section id='navbar' className={`${props.mode}navbar`}>
            <h2 className='siteName'>{props.siteName}</h2>
            <div className='navbarAll' style={{ height: `${height}` }}>
                <ul>
                    <li><Link to='/' className={`${props.mode}`}>General</Link></li>
                    <li><Link to='/Entertainment' className={`${props.mode}`}>Entertainment</Link></li>
                    <li><Link to='/Sports' className={`${props.mode}`}>Sports</Link></li>
                    <li><Link to='/Science' className={`${props.mode}`}>Science</Link></li>
                    <li><Link to='/Business' className={`${props.mode}`}>Business</Link></li>
                    <li><Link to='/Health' className={`${props.mode}`}>Health</Link></li>
                    <li><Link to='/Technology' className={`${props.mode}`}>Technology</Link></li>
                </ul>
            </div>
            <img className='navbar-menu' onClick={handleNavbar} src={menu} alt='' />
        </section>
            <li className='blank' onClick={handleNavbar} style={{display: `${display}`}}></li>
        </header>
    )
}
