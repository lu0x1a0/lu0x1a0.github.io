import React from "react";
import './Navbar.css';
export default function Navbar() {
    return (
        <ul class = "nav" >
            <li ><a class="active" href="#home">Home</a></li>
            <li ><a href="#news">Projects</a></li>
            <li ><a href="#contact">Contact</a></li>
            <li ><a href="#about">About</a></li>
        </ul>
    );
}