import React from 'react'
import "./Nav.css"
import $ from 'jquery';

const Nav = () => {

    $(document).ready(function(){
		$('.menu-btn').click(function(){
			$('.navbar .menu').toggleClass("active")
			$('.menu-btn i').toggleClass("active")
        })})
        
    return (
        <div>
            <nav className="navbar">
		   <div className="max-width">
			   <div className="logo">
				   <a href="#"> Portfo
					   <span>
						   lio.
					   </span>
				   </a>
			   </div>
			   <ul className="menu">
				   <li><a href="#">Home</a></li>
				   <li><a href="#about">Acerca de mi</a></li>
				   <li><a href="#services">Servicios</a></li>
				   <li><a href="#skills">Habilidades</a></li>
				   <li><a href="#team">Equipos de trabajo</a></li>
				   <li><a href="#proyect">Proyectos</a></li>
				   <li><a href="#contact">Contacto</a></li>
			   </ul>
			   <div className="menu-btn">
				   
				   <i className="fas fa-bars" />
				   
			   </div>
		   </div>
		</nav>            
        </div>
    )
}

export default Nav
