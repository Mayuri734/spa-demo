import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
       <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Product">Product</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Services">Services</a></li>
       </ul>
    </div>
  )
}