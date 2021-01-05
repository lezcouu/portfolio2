import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <div className="services" >
            <div className="max-width">
                <h2 className="title"> Mis servicios.</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">
                                Desarrollo web,
                            </div>
                            <p>
                                Soy un desarrollador web fullstack(back-end y front-end), cuento con la experiencia de 
                                haber podido realizar diversas aplicaciones creadas para la administración de un comercio 
                                como puede ser una tienda online, un e-commerce, una app para gestionar negocios como asi 
                                tambien una app administrativa para manejar colegios.
                            </p>
                        </div>                    
                    </div>                    
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">
                                Maximos beneficios
                            </div>
                            <p>
                                El enfoque esta siempre dado en el cliente, la idea es utilizar los maximos recursos en 
                                post-beneficio de nuestro cliente. Desde estadisticas hasta seguimiento de ventas o 
                                alternancia de información como tambien ideando las aplicaciones para que sea la herramienta 
                                más util eficiente e intuitiva para el usuario.
                            </p>
                        </div>                    
                    </div>                    
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">
                                Diseño UX
                            </div>
                            <p>
                                El pedido del cliente es total y absolutamente decisivo para el diseño de la aplicación pero 
                                en caso de que este no posea los conocimientos estoy preparado para otorgar la mejor experiencia 
                                al usuario, desde la fluidez, el embellecimiento a la comodidad de poder buscar lo que necesite 
                                lo mas rapido posible.
                            </p>
                        </div>                    
                    </div>                    
                </div>
            </div>
        </div>           
    )
}

export default Services
