import React from 'react'
import "./Nav.css"
import $ from 'jquery';
import Nav from "./Nav.jsx"
import About from "./About.jsx"
import Services from "./Services.jsx"
import Skills from "./Skills.jsx"
import Team from "./Team.jsx"
import Proyect from "./Proyect.jsx"
import Contact from "./Contact.jsx"
import "./Home.css"

//USO HOME para ser declarativo e integro todos los componentes despues lo envio a portfolio todo armado.
const Home = () => {
	
	$(document).ready(function(){
		$('.menu-btn').click(function(){
			$('.navbar .menu').toggleClass("active")
			$('.menu-btn i').toggleClass("active")
		})})
	
	return (
		<fragment>
		<Nav />
		<section className="home" id="home">
			<div className="max-width">
				<div className="home-content">
					<div className="text-1">Hola mi nombre es</div>
					<div className="text-2">Pablo Lezcano</div>
					<div className="text-3">y soy desarrollador <span>web</span></div>
					<a href="#contact">Contactame</a>
				</div>
			</div>
		</section>
		<section id="about">
			<About />
		</section>
		<section id="services">
			<Services />
		</section>
		<section id="skills">
			<Skills />
		</section>
		<section id="team">
			<Team />
		</section>
		<section id="proyect">
			<Proyect />
		</section>
		<section id="contact">
			<Contact />
		</section>
		<footer>
			<span>Created By <a href="#"> CodingLezcouu </a>| <span className="far fa-copyright">2021 All rights reserved.</span></span>
		</footer>
		</fragment>
	)
}

export default Home