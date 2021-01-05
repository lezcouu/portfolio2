import React from 'react'
import "./Proyect.css"
import ReactPlayer from "react-player"

const Proyect = () => {
    const proyectos = [
        { url:"https://www.youtube.com/watch?v=MF4wg8S2HOs", title:"Smartbyte" }
    ]
    return (
        <div style={{
            display:"flex"
        }}>
            <h1>
                Proyectos
            </h1>
            {proyectos.map((elem,index) => {
                return (
                    <div 
                    key={index}
                    >
                        <p>{elem.title}</p>
                        <ul>
                        <ReactPlayer
                            url={elem.url}
                            width="100%"
                            height="40%"
                            controls
                            />
                        </ul>
                    </div>
                )
                })}
        </div>
        )
}

export default Proyect
