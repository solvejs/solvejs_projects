import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div id='footer-menu'>
            <NavLink to='/' activeStyle={{backgroundColor: 'blue', color: 'white', fontWeight: 'bolder'}} strict>Home</NavLink>
            <NavLink to='/FAQs'>FAQs</NavLink>
            <NavLink to='/Resources'>Resources</NavLink>
            <NavLink to='/terms'>Cookies & Terms</NavLink>
        </div>
    )
}