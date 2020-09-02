import React from 'react';
import {BrowserRouter as Router, Link, Switch, NavLink} from 'react-router-dom';

function Header() {
    return (
        <div id='header' style={{width: '90vw', margin: 'auto', position: 'fixed', top: 0, left: 'auto', height: '70px', marginBottom: '80px', backgroundColor: 'white', color: '#00b5ff', lineHeight: '100%', fontSize: '2em'}}>
        <div className='header-text'>
            <h1 style={{width: 'max-content', margin: 'auto'}}><span style={{color: 'black'}}>&lt;</span>S o l v e J S <span style={{color: 'black'}}>&#47;&gt;</span> Learning Past Yet</h1>
        </div>
        <div id='nav-menu'>
            <NavLink to='/' activeStyle={{backgroundColor: 'blue', color: 'white', fontWeight: 'bolder'}} strict>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/goals'>Goals</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
        </div>
    )
}

export {Header};