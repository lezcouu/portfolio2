import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="div max-width">
                <h2 className="title">Contactame</h2>
                <div className="contact-content">
                <div className="column left">
                    <div className="text">Contactemos </div>
                        <p>
                            Actualmente vivo en Argentina y tengo 29 años, me gustaria mucho que podamos hablar para compartir desafios y proyectos juntos.
                        </p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">
                                        Nombre
                                    </div>
                                    <div className="sub-title">
                                        Pablo David Lezcano
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">
                                        Dirección
                                    </div>
                                    <div className="sub-title">
                                        Caballito - CABA - Argentina
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">
                                        Correo
                                    </div>
                                    <div className="sub-title">
                                        Lezcouu@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                       <p> Algunos de mis proyectos </p>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Contact
