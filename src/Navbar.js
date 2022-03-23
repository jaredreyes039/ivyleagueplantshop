import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends React.Component{
    render(){
        
        return(
        <nav className='navBar'>
            <ul className = 'nav-list'>
            <li className='nav-item'>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to = '/'><p>Home</p></Link>
                </li>
                <li className='nav-item'>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to = '/Mission'><p>Mission</p></Link>
                </li>
                <li className='nav-item'>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to = '/Blog'><p>Blog</p></Link>
                </li>
                <li className='nav-item'>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to = '/Shop' ><p>Shop</p></Link>
                </li>
            </ul>
        </nav>
        )
    }
}